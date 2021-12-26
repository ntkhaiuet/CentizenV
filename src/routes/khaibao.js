const express = require("express");
const router = express.Router();

const khaibaoController = require("../app/controllers/KhaibaoController");

// router.get('/:slug', newsController.show);
// router.get('/auth', loginController.getAuth);
// router.post('/auth', loginController.auth);
// router.post('/', addController.add)
router.get('/get', khaibaoController.get);
router.post('/post', khaibaoController.post);
router.get('/', khaibaoController.index);

module.exports = router;