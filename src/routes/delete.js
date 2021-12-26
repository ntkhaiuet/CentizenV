const express = require("express");
const router = express.Router();

const deleteController = require("../app/controllers/DeleteController");

// router.get('/:slug', newsController.show);
// router.get('/auth', loginController.getAuth);
// router.post('/auth', loginController.auth);
// router.post('/', addController.add)
router.get('/', deleteController.index);

module.exports = router;