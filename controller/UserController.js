const UserSchema = require("../model/User");

const signup = (req, res) => {
  const user = new UserSchema({
    email: req.body.email,
    password: req.body.password,
    fullName: req.body.fullName,
  });
  user
    .save()
    .then((result) => {
      res.json({ data: { status: 201, message: "Registered" } });
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
};
