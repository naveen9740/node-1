const mongoose=require('mongoose');
const empSchema=new mongoose.Schema({
    department:{
        type:String,
        required:[true,'Please Enter Department']
    },
    role:{
        type:String,
        required:[true,'Please Enter Role'],
        enum : ['operator','supervisor']
    },
    shift:{
        type:String,
        required:[true,'Please Enter Shift'],
        enum : ['mshift','eshift','nshift']
    },
    brandsd:{
        type:String,
        required:[true,'Please Enter BrandSD'],
    },
    devicedate:{
        type:Date,
        required:[true,'Please Enter deviceDate'],
    },
    engname:{
        type:String,
        required:[true,'Please Enter Engineer Name'],
    },
    incharge:{
        type:String,
        required:[true,'Please Enter in charge'],
    },
    itemname:{
        type:String,
        required:[true,'Please Enter in ItemName'],
    },
    unitname:{
        type:String,
        required:[true,'Please Enter in UnitName'],
    },
},{timestamps:true});

module.exports=mongoose.model('employees',empSchema)