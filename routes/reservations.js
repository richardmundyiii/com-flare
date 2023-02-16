const express = require("express");
const router = express.Router();
const ensureLoggedIn = require("../config/ensureLoggedIn");
const reservationsCtrl = require("../controllers/reservations");

router.get("/listings/:id/reserve", ensureLoggedIn, reservationsCtrl.show);

router.post(
  "/listings/:id/reservations",
  ensureLoggedIn,
  reservationsCtrl.create
);

module.exports = router;
