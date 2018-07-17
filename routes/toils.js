var express = require('express');
var router = express.Router();

const path = require('path');
console.log(__dirname);
var toils= require (path.join(__dirname, '../controllers/toils'));

router.get('/',toils.getToil);
router.post('/',toils.createToil);

module.exports = router;
