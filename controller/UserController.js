const UserSchema = require("../model/User");
const bcrypt = require('bcrypt');


const signup = (req, res) => {

  UserSchema.findOne( {email:req.body.email}).then(existsData=>{
    if(existsData===null){
        bcrypt.hash(req.body.password,10, function (err, hash) {
                     const user = new UserSchema({
                       email: req.body.email,
                       password: hash,
                       fullName: req.body.fullName,
                     });

           user
             .save()
             .then((result) => {
               res.json({
                 data: { status: 201, message: "Registered new user", result },
               });
             })
             .catch((error) => {
               console.log(error);
               res.json(error);
             });
        });


    }else{
       res.status(403).json({data:{status:403, message:"Already Exits"}}) 
    }})
    .catch((error) => {
      console.log(error);
      res.json(error);
    })
  }


module.exports={
    signup
}