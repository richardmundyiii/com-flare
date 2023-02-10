const express = require("express");
const router = express.Router();
const listingsCtrl = require("../controllers/listings");
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.get("/new", ensureLoggedIn, listingsCtrl.new);
router.post("/", ensureLoggedIn, listingsCtrl.create);

module.exports = router;
