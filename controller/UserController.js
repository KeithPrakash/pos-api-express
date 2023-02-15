const UserSchema = require("../model/User");

const signup = (req, res) => {
  const user = new UserSchema({
    email: req.body.email,
    password: req.body.password,
    fullName: req.body.fullName,
  });

  UserSchema.findOne( {email:req.body.email}).then(existsData=>{
    if(existsData===null){
        user.save()
    .then((result) => {
      res.json({ data: { status: 201, message: "Registered new user", result } });
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    })

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