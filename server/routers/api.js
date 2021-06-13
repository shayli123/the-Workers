const router = require('express').Router()
const employee=require('../controlers/EmployeeControler')


router.post('/checkPermission', employee.checkPermission)
router.get('/getAllEmployed', employee.getAllEmployed)
router.get('/:employeeEmail/getEmployedByEmail', employee.getEmployedByEmail)
router.post('/setNewEmployed', employee.setNewEmployed)
router.post('/:employeeId/updateEmployee', employee.updateEmployee)

module.exports = router