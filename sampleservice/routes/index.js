var express = require('express');
var controller = require('../controller/index-controller');
var router = express.Router();

/* GET home page. */
router.get('/',controller.test);

module.exports = router;
