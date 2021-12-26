const express = require("express");
const router = express.Router();

const addController = require("../app/controllers/AddController");

router.post('/', addController.add)
router.get('/', addController.index);

module.exports = router;