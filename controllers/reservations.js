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
  console.log("working");
}
