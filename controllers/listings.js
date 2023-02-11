const User = require("../models/user");
const Listing = require("../models/listing");

module.exports = {
  new: newListing,
  create,
};

function newListing(req, res) {
  res.render("listings/new", { title: "Add A Listing" });
}

function create(req, res) {
  req.body.ifrCheck = !!req.body.ifrCheck;
  req.body.host = req.user.googleId;
  const listing = new Listing(req.body);
  listing.save(function (err) {
    if (err) return res.redirect("/");
    res.redirect("/");
  });
}
