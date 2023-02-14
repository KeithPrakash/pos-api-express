const express =require('express');
const CustomerController = require('../controller/CustomerController');

const router = express.Router();

router.post('/save', CustomerController.saveCustomer);
router.put('/update', CustomerController.updateCustomer); 
router.delete('/delete', CustomerController.deleteCustomer); 
router.get('/get', CustomerController.getCustomer); 
router.get('/list', CustomerController.getALLCustomers); 

module.exports=router;


