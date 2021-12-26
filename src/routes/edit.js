const express = require("express");
const router = express.Router();

const editController = require("../app/controllers/EditController");

// router.get('/:slug', newsController.show);
// router.get('/auth', loginController.getAuth);
// router.post('/auth', loginController.auth);
// router.post('/', addController.add)
router.get('/edit', editController.getEdit);
router.post('/post', editController.postEdit);
router.get('/', editController.index);

module.exports = router;