const User = require("../models/user");
const Listing = require("../models/listing");

module.exports = {
  index,
  new: newListing,
  create,
  show,
  edit,
  update,
  delListing,
};

function index(req, res) {
  Listing.find({}, function (err, listings) {
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
  const listing = new Listing(req.body, req.body.host);
  listing.save(function (err) {
    if (err) console.log(err);
    res.redirect("/");
  });
}

function show(req, res) {
  Listing.findById(req.params.id)
    .populate("host")
    .exec(function (err, listing) {
      res.render("listings/show", { title: "Details", listing });
    });
}

function edit(req, res) {
  Listing.findById(req.params.id, (err, listing) => {
    res.render("listings/edit", { title: "Edit Listing", listing });
  });
}

function update(req, res) {
  Listing.findOneAndUpdate(
    { _id: req.params.id, host: req.user._id },
    req.body,
    { new: true },
    function (err, listing) {
      if (err || !listing) return res.redirect("/listings");
      res.redirect(`/listings/${listing._id}`);
    }
  );
}

function delListing(req, res) {
  Listing.findOneAndDelete(
    { _id: req.params.id, host: req.user._id },
    function (err) {
      res.redirect("/listings", { title: "All Listings" });
    }
  );
}
