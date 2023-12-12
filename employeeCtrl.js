
const Employee = require("../model/Employee");
// create
const createEmployeeCtrl = async (req, res) => {
    const {name,city,isMarried,salary}=req.body;
    try {
        const employee=await Employee.create({
            name,
            city,
            isMarried,
            salary,
        })
        res.json({
            status: "success",
            data: "employee",
        });
    } catch (error) {
        res.json(error);
    }
}

// get all employees
const getEmployee = async (req, res) => {

    try {
        const employees=await Employee.find();
        res.json({
            status: "Success",
            data: "employees",
        });
    } catch (error) {
        res.json(error);

    }
}

// update employees
const putEmployee = async (req, res) => {
    try {
        const updatedEmp=await Employee.findByIdAndUpdate(re.params.id,{
            name:req.body.name,
            city:req.body.city,
            isMarried:req.body.isMarried,
            salary:req.body.salary,
    
        },
        {
            new:true,    // it means that user can se the updated value
            runValidators:true,   // it means we want stick to validation schema
        })
        res.json({
            status: "Success",
            data: updatedEmp,
        });
    } catch (error) {
        res.json(error);

    }
}


// delete employees
const deleteEmployee = async (req, res) => {
    try {
        const foundEmp=await Employee.findByIdAndDelete(req.params.id);
        res.json({
            status: "Success",
            // OR
            data:"Employee has deleted successfully",
            // data: foundEmp,
        });
    } catch (error) {
        res.json(error);

    }
}


// get single employee
const getSingleEmployee = async (req, res) => {
    try {
        res.json({
            status: "Success",
            data: "Fetch single Employee",
        });
    } catch (error) {
        res.json(error);

    }
}

module.exports = {
    createEmployeeCtrl,
    getEmployee,
    putEmployee,
    deleteEmployee,
    getSingleEmployee,
}