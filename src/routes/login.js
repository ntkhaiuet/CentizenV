const express = require("express");
const router = express.Router();

const loginController = require("../app/controllers/LoginController");

router.get('/auth', loginController.getAuth);
router.post('/auth', loginController.auth);
router.get('/', loginController.index);

module.exports = router;