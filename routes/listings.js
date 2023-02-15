const express = require("express");
const router = express.Router();
const listingsCtrl = require("../controllers/listings");
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.get("/", listingsCtrl.index);

router.get("/new", ensureLoggedIn, listingsCtrl.new);

router.get("/:id", listingsCtrl.show);

router.get("/:id/edit", ensureLoggedIn, listingsCtrl.edit);

router.get("/:id/reserve", ensureLoggedIn, listingsCtrl.reserve);

router.put("/:id/edit", ensureLoggedIn, listingsCtrl.update);

router.post("/", ensureLoggedIn, listingsCtrl.create);

router.delete("/:id", ensureLoggedIn, listingsCtrl.delListing);

module.exports = router;
