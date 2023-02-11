const express = require("express");
const router = express.Router();
const listingsCtrl = require("../controllers/listings");
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.get("/", listingsCtrl.index);

router.get("/new", ensureLoggedIn, listingsCtrl.new);

router.get("/:id", listingsCtrl.show);

router.post("/", ensureLoggedIn, listingsCtrl.create);

module.exports = router;
