const express = require("express");
const router = express.Router();

const homeController = require("../app/controllers/HomeController");

// router.get('/:slug', newsController.show);
// router.get('/auth', loginController.getAuth);
// router.post('/auth', loginController.auth);
router.get('/', homeController.index);

module.exports = router;