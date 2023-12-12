const express=require('express');
const { createEmployeeCtrl,getEmployee, putEmployee, deleteEmployee, getSingleEmployee } = require('../controller/employeeCtrl');

const router=express.Router();



// create employees
router.post("/",createEmployeeCtrl);

// get employees 
router.get("/",getEmployee);


// PUT / employees/:id
router.put("/:id",putEmployee);


// DELETE / employees
router.delete("/:id",deleteEmployee);


//Get single employee
router.get("/:id",getSingleEmployee);


module.exports=router;