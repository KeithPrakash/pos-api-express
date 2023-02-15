const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config(); 
mongoose.set("strictQuery", true);
const port = process.env.SERVER_PORT;

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
//======
const userRoute= require('./route/UserRoute')
const customerRoute = require("./route/CustomerRoute");
//======

mongoose
  .connect("mongodb://localhost:27017/Pos")
  .then(() => {
    app.listen(port, () => {
      console.log(`server is up and running on ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.post("/", (req, res) => {
  console.log(req.body);
  res.json({ data: "it works... it works.... " });
});

app.use("/api/v1/customer", customerRoute); // http://localhost:3000/api/v1

app.use('/api/v1/user',userRoute);
