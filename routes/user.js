const express = require("express");
const router = express.Router();
const ensureLoggedIn = require("../config/ensureLoggedIn");
const userCtrl = require("../controllers/user");

router.get("/:id", ensureLoggedIn, userCtrl.index);

module.exports = router;
