const express = require("express");
const router = express.Router();
const reviewCtl = require("../controllers/reviews");
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.post("/listings/:id/new", ensureLoggedIn, reviewCtl.create);

router.delete("/reviews/:id", ensureLoggedIn, reviewCtl.delete);

module.exports = router;
