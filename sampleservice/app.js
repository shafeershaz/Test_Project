var express = require('express');
var mongoose = require('mongoose');
var app = express();
mongoose.connect("mongodb+srv://shaz:Je8F7Cs0TrztwD23@cluster0-e6r4m.mongodb.net/college?retryWrites=true", { 
  useNewUrlParser: true,
  useCreateIndex: true
}).then(()=>{
  console.log("Connected to database")
})
.catch(()=>{
  console.log("Connection failed")
});
app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin","*")
  res.setHeader("Access-Control-Allow-Header","Origin,X-Requested-With,Content-Type,Accept")
  res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,DELETE,OPTIONS")
  next()
});
app.use('/api/login',(req,res,next) => {
  res.status(200).json({message:'helo from express'});
});

module.exports = app;