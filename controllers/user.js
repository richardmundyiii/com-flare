const Listing = require("../models/listing");
const User = require("../models/user");

module.exports = {
  index,
};

function index(req, res) {
  Listing.find({})
    .populate("reservations")
    .exec(function (err, listings) {
      const myListings = listings.filter((el) => el.host.equals(req.user._id));
      let reservationR = [];
      listings.forEach((el) => {
        el.reservations.forEach((r) => {
          if (r.host.equals(req.user._id)) {
            reservationR.push(el);
          }
        });
      });
      res.render("user/index", {
        title: "User Profile",
        reservationR,
        myListings,
      });
    });
}
