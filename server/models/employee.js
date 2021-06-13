const mongoose = require("mongoose")

const EmployeeSchema = mongoose.Schema({
    name: { type: String, },
    email: { type: String, },
    password: { type: String },
    EmployedStatus:{ type: String }
})

module.exports = mongoose.model('Employee', EmployeeSchema)