const express = require("express");
const router = express.Router();

const createaccountController = require("../app/controllers/CreateAccountController");

router.post('/', createaccountController.create_account);
router.get('/', createaccountController.index);

module.exports = router;