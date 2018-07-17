var express = require('express');
var router = express.Router();

const path = require('path');
var users= require (path.join(__dirname, '../controllers/users'));

router.get('/',users.sayHello);

module.exports = router;
