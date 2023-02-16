const express = require("express");
const router = express.Router();
const passport = require("passport");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Com Flare" });
});

router.get(
  "/auth/google",
  passport.authenticate(
    // Which passport strategy is being used?
    "google",
    {
      scope: ["profile", "email"],
      // Optional
      prompt: "select_account",
    }
  )
);

router.get("/oauth2callback", function (req, res, next) {
  const redirectTo = req.session.redirectTo;
  delete req.session.redirectTo;
  passport.authenticate("google", {
    successRedirect: redirectTo || "/user/:id", //-> replace '/' as desired
    failureRedirect: "/",
  })(req, res, next); // Call the middleware returned by passport
});

router.get("/logout", function (req, res) {
  req.logout(function () {
    // Change path for your "landing" page
    res.redirect("/");
  });
});

module.exports = router;
