const mongoose=require('mongoose');
const shiftSchema=new mongoose.Schema({
    empId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'employees'
    },
    shift:{
        type:String,
        required:[true,'Please Enter Shift'],
        enum : ['mshift','eshift','nshift']
    },
    shifttime:{
        type:String,
        required:[true,'Please Enter Shift Time'],
    }
},{timestamps:true});

module.exports=mongoose.model('shifts',shiftSchema)