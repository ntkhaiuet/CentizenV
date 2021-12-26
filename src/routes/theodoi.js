const express = require("express");
const router = express.Router();

const theodoiController = require("../app/controllers/TheodoiController");

// router.get('/:slug', newsController.show);
// router.get('/auth', loginController.getAuth);
// router.post('/auth', loginController.auth);
// router.post('/', addController.add)
router.get('/', theodoiController.index);

module.exports = router;