const User = require("../models/user");

module.exports = {
  new: newListing,
  create,
};

function newListing(req, res) {
  res.render("listings/new", { title: "Add A Listing" });
}

function create(req, res) {
  console.log("working");
  res.redirect("/");
}
