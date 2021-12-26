const express = require("express");
const router = express.Router();

const viewController = require("../app/controllers/ViewController");

router.get('/detail', viewController.detail);
router.get('/:cccd', viewController.search);
router.get('/', viewController.index);

module.exports = router;