const CustomerSchema = require('..model/Customer');

const saveCustomer=(req,res)=>{
    const customer= new CustomerSchema({
        name:req.body.name,
        address:req.body.address,
        salary:req.body.salary
    });
    customer.save().then(result=>{
        res.json({data:{status:201,message:'customer saved'}})
    }).catch(error=>{
        console.log(error);
        res.json(error);
    })
}


module.exports={
    saveCustomer
}
