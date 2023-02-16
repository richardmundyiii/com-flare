const Listing = require("../models/listing");

module.exports = {
  index,
};

function index(req, res) {
  let randomListing = function (arr) {
    return Math.floor(Math.random() * arr.length + 1);
  };
  let randomReview = function (arr) {
    return Math.floor(Math.random() * arr.length + 1);
  };
  Listing.find({}, function (err, listings) {
    res.render("index", {
      title: "Community Flare",
      listings,
      randomListing,
      randomReview,
    });
  });
}
