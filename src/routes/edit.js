const express = require("express");
const router = express.Router();

const editController = require("../app/controllers/EditController");

router.get('/edit', editController.getEdit);
router.post('/post', editController.postEdit);
router.get('/', editController.index);

module.exports = router;