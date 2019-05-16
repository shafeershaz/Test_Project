var express = require('express');
var userController = require('../controller/users-controller');
var router = express.Router();

/* GET home page. */
router.post('/',userController.apiCreateUser);

exports.router = router;
