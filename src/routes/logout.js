const express = require("express");
const router = express.Router();

const logoutController = require("../app/controllers/LogoutController");

// router.get('/:slug', newsController.show);
// router.get('/auth', loginController.getAuth);
// router.post('/auth', loginController.auth);
// router.post('/', addController.add)
router.get('/', logoutController.index);

module.exports = router;