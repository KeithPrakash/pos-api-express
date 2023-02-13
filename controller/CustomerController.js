const CustomerSchema = require('..model/Customer');
const saveCustomer=(req,res)=>{
const customer = CustomerSchema({
  name: req.body.name,
  address: req.body.address,
  salary: req.body.salary,
});
}

module.exports={
    saveCustomer
}
