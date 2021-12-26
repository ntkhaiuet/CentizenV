const express = require("express");
const router = express.Router();

const viewController = require("../app/controllers/ViewController");

// router.get('/:slug', newsController.show);
// router.get('/auth', loginController.getAuth);
// router.post('/auth', loginController.auth);
// router.post('/', addController.add)
router.get('/detail', viewController.detail);
router.get('/:cccd', viewController.search);
router.get('/', viewController.index);

module.exports = router;