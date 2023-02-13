const mongoose= require('mongoose');
const CustomerSchema= require('../model/Customer');

const saveCustomer=(req,res)=>{
    const customer = CustomerSchema({
        name:req.body.name,
        address:req.body.address,
        salary:req.body.salary
    });

    customer.save().then(result=>{
        res.json({data:{status:201, message:'Customer saved'}});

    }).catch(error=>{
        console.log(error);
        res.json(error)
    })
}

const updateCustomer = (req, res) => {

    CustomerSchema.findOneAndUpdate({_id:req.headers.id},{$set:{
    name: req.body.name,
    address: req.body.address,
    salary: req.body.salary
    }}).then(result => {
      res.json({ data: { status: 200, message: "Customer updated" } });
    }).catch((error) => {
      console.log(error);
      res.json(error);
    });
};
const deleteCustomer = (req, res) => {

    CustomerSchema.findOneAndDelete({_id:req.headers.id}).then(result => {
      res.json({ data: { status: 200, message: "Customer deleted" } });
    }).catch((error) => {
      console.log(error);
      res.json(error);
    });
};
module.exports={
    saveCustomer, updateCustomer
}
 