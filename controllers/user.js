const Listing = require("../models/listing");
const User = require("../models/user");

module.exports = {
  index,
};

function index(req, res) {
  Listing.find({}, function (err, listings) {
    const myListings = Listing.find(
      { host: req.user._id },
      function (err, listing) {}
    );
    console.log(myListings);
    let reservationR = [];
    listings.forEach((el) => {
      el.reservations.forEach((r) => {
        console.log(r.host);
        console.log(req.user._id);
        if (r.host.equals(req.user._id)) {
          reservationR.push(el);
        }
      });
    });
    res.render("user/index", {
      title: "User Profile",
      listings,
      reservationR,
    });
  });
}
