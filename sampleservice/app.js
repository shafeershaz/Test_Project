var express = require('express');
var mongoose = require('mongoose');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
mongoose.connect("mongodb://localhost:27017/test", { 
  useNewUrlParser: true,
  useCreateIndex: true
}).then(()=>{
  console.log("Connected to database")
})
.catch(()=>{
  console.log("Connection failed")
});
var usersRouter = require('./routes/users').router;
var corsOptions = {
  Origin: true,
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
  exposedHeaders: ['Content-Type', 'Location', 'Methods', 'Accept'],
  optionsSuccessStatus: 204,
  credentials: true
};
app.use(cors(corsOptions));
app.use(bodyParser.json({limit: '5mb'}));

app.use('/api/login',usersRouter);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;