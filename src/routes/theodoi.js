const express = require("express");
const router = express.Router();

const theodoiController = require("../app/controllers/TheodoiController");

router.get('/', theodoiController.index);

module.exports = router;