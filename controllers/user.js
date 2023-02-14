const Listing = require("../models/listing");
const user = require("../models/user");
const User = require("../models/user");

module.exports = {
  index,
};

function index(req, res) {
  Listing.findById({ _id: User.id }, function (err, listings) {
    res.render("user/index", { title: "User Profile", listings });
  });
}
