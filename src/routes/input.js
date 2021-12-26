const express = require("express");
const router = express.Router();

const inputController = require("../app/controllers/InputController");

// router.get('/:slug', newsController.show);
// router.get('/auth', loginController.getAuth);
// router.post('/auth', loginController.auth);
// router.post('/', addController.add)
router.get('/add', inputController.getAdd);
router.post('/add', inputController.add);
router.get('/', inputController.index);

module.exports = router;