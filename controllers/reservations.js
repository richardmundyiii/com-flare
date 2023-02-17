const Listing = require("../models/listing");

module.exports = {
  show,
  create,
};

function show(req, res) {
  Listing.findById(req.params.id, (err, listing) => {
    res.render("listings/reserve", {
      title: "Make A Reservation",
      listing,
    });
  });
}

function create(req, res) {
  Listing.findById(req.params.id, (err, listing) => {
    req.body.host = req.user._id;
    listing.reservations.push(req.body);
    listing.save(function (err) {
      console.log(err);
      res.redirect(`/listings/${listing._id}`);
    });
  });
}
