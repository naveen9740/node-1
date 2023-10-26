const express = require("express");
const router = express.Router();
const mongoose = require("mongoose")
const empSchema = require("../models/emp.schema");
const successResponse = require('../utility/responseHandler/success.response')
const successMsg = require('../utility/responseHandler/success.message')
const errorResponse = require('../utility/responseHandler/error.response')
const errorMsg = require('../utility/responseHandler/error.message');
const { dateToIso } = require('../utility/helpers/helper');
const shiftSchema = require("../models/shift.schema.");

router.post("/emp", async (req, res) => {
  try {
    const { department = "", role = "", shift = "", brandsd = "", devicedate = "", engname = "", incharge = "", unitname = "", itemname = "", shifts = [] } = req.body;
    // insert data to employee schema
    const employee = await empSchema.create({ department, role, shift, brandsd, devicedate: dateToIso(devicedate), engname, incharge, unitname, itemname });
    // loop through the shifts
    if (shifts?.length) {
      shifts.forEach(async shift => {
        // insert data to shift schema
        await shiftSchema.create({ empId: mongoose.Types.ObjectId(employee), shift: shift?.shift, shifttime: shift?.shifttime });
      })
    }
    res.json(successResponse(successMsg.S001, employee));
  } catch (error) {
    res.json(errorResponse(errorMsg.E001, error?.message))
  }
});

router.get('/emp', async(req,res)=>{
  try {
    const emp = await empSchema.aggregate([
      {
        // empty {} inorder to fetch all the documents.
      $match:{},
      },
      // lookup because we need to fetch shifts data also using _id of empSchema
      {
        $lookup:{
          from:"shifts",
          localField:"_id",
          foreignField:"empId",
          as:"shiftsData"
        }
      }
  ]);
    res.json(successResponse(successMsg.S001, emp));
  } catch (error) {
    res.json(errorResponse(errorMsg.E001, error?.message))
  }
})

module.exports = router;
