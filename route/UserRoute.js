const express = require('express')
const UserController =require('../controller/UserController');
const router = express.Router();

router.post('/save', UserController.signup);


module.exports=router;