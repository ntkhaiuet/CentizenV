const express = require("express");
const router = express.Router();

const completeController = require("../app/controllers/CompleteController");

router.get('/', completeController.index);

module.exports = router;