const mongoose=require('mongoose');

// SCHEMA
const employeesSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    isMarried:{
        type:Boolean,
        required:false,
    },
    salary:{
        type:Number,
        required:true,
    },
},{
    timestamps:true,
});


// MODEL
const Employee=mongoose.model("Employee",employeesSchema);

module.exports=Employee;