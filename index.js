const express = require('express');
const bodyParser = require("body-parser");
const mongoose= require('mongoose')
require('dotenv').config();
mongoose.set("strictQuery", true);
const port = process.env.SERVER_PORT;

const app= express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/ebill').then(()=>{
    app.listen(port, () => {
      console.log(`server is up and running on ${port}`);
    });
}).catch(err=>{
    console.log(err);
})


app.post('/customer',(req,res)=>{
    console.log(req.body);
    res.json({data:"suck"});
})