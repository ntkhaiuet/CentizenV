const express = require("express");
const router = express.Router();

const deleteController = require("../app/controllers/DeleteController");

router.get('/', deleteController.index);

module.exports = router;