var express = require("express");
var router = express.Router();
var profileController = require("../controller/ProfileController");
/* GET home page. */
router.get("/", profileController.index);

module.exports = router;
