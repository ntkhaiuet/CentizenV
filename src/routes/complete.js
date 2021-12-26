const express = require("express");
const router = express.Router();

const completeController = require("../app/controllers/CompleteController");

// router.get('/:slug', newsController.show);
// router.get('/auth', loginController.getAuth);
// router.post('/auth', loginController.auth);
// router.post('/', addController.add)
router.get('/', completeController.index);

module.exports = router;