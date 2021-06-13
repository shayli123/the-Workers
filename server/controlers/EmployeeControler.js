const Employee = require('../models/employee')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config();

const checkPermission = async (req, res) => {
    try {
        console.log("loginEmployee function work!!!");
        console.log("email: ", req.body.email, "password: ", req.body.password);
        const jwtofEmployee = jwt.sign({ email: req.body.email, password: req.body.password }, process.env.SECRET);
        console.log(jwtofEmployee);
        WantedEmployee = await Employee.findByIdAndUpdate({ email: req.body.email, password: req.body.password },{jwtEmployee:jwtofEmployee});
        console.log(WantedEmployee);
        if (WantedEmployee == null) {
            res.status(200).send("this employee is not found , try again");
        }
        else {
            res.status(200).json({
                message: "This employee exists in the system",
                jwtEmployee: jwtofEmployee
            })
        }
    }
    catch (err) { res.status(500).json({ error: err }) }


}

const getAllEmployed = async (req, res) => {
    try 
    {
        const employees = await Employee.find();
        console.log(employees)
        if (employees) {
            res.status(200).json({ employees: employees })
        }
    }
    catch (err) {
        res.status(500).json({ error: err })
    }


}

const getEmployedByEmail = async (req, res) => {
    const { employeeEmail } = req.params;
    console.log("employeeEmail : ", employeeEmail)
    Employee.findOne({email:employeeEmail}).then(employee => {
        console.log("employee : ", employee)
        res.status(200).json({
            message: "The employee is in the system",
            WantedEmployee: employee
        })
    }).catch(err => {
        console.log("error: ", err)
        res.status(500).send(err.message)
    })
}

const setNewEmployed = async (req, res) => {
    console.log("setNewEmployed function work !!!")
    const { employee } = req.body;
    try {
        console.log('employee : ', employee);
        const newEmployee = new Employee({
            name: employee.name,
            password: employee.password,
            email: employee.email,
            EmployedStatus:'candidate'
        });
        console.log("newEmployee", newEmployee);
        await newEmployee.save();
        res.status(200).json({
            message: "The save was successful",
            employee: employee
        })
    } catch (err) { res.status(400).send(err.message) }
}

const updateEmployee = async (req, res) => {
    try {
        const user = await Employee.findByIdAndUpdate(req.params.employeeId, req.body);
        res.status(200).json({ user: user })
    }
    catch (err) {
        res.status(500).json({ error: err })
    }
}

module.exports = { checkPermission, getAllEmployed, getEmployedByEmail, setNewEmployed, updateEmployee }