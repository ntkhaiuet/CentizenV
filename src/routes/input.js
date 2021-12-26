const express = require("express");
const router = express.Router();

const inputController = require("../app/controllers/InputController");

router.get('/add', inputController.getAdd);
router.post('/add', inputController.add);
router.get('/', inputController.index);

module.exports = router;