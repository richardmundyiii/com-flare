const User = require("../models/user");
const Listing = require("../models/listing");

module.exports = {
  index,
  new: newListing,
  create,
  show,
  edit,
};

function index(req, res) {
  Listing.find({})
    .populate("host")
    .exec(function (err, listings) {
      res.render("listings/index", { title: "All Listings", listings });
    });
}

function newListing(req, res) {
  res.render("listings/new", { title: "Add A Listing" });
}

function create(req, res) {
  req.body.ifrCheck = !!req.body.ifrCheck;
  req.body.host = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  console.log(req.body);
  const listing = new Listing(req.body, req.body.host);
  listing.save(function (err) {
    if (err) console.log(err);
    res.redirect("/");
  });
}

function show(req, res) {
  Listing.findById(req.params.id, (err, listing) => {
    res.render("listings/show", { title: "Details", listing });
  });
}

function edit(req, res) {
  Listing.findById(req.params.id, (err, listing) => {
    res.render("listings/edit", { title: "Edit Listing", listing });
  });
}
