var express = require("express");
var router = express.Router();


var FrontwebController = require("../controllers/FrontwebController");

router.get('/', FrontwebController.index);

module.exports = router;
