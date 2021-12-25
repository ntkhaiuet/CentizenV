const express = require("express");
const router = express.Router();

const createaccountController = require("../app/controllers/CreateAccountController");

// router.get('/:slug', newsController.show);
// router.get('/auth', loginController.getAuth);
// router.post('/auth', loginController.auth);
// router.post('/', addController.add)
router.post('/', createaccountController.create_account);
router.get('/', createaccountController.index);

module.exports = router;