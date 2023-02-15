const Listing = require("../models/listing");
const user = require("../models/user");
const User = require("../models/user");

module.exports = {
  index,
};

function index(req, res) {
  Listing.find({})
    .populate("host")
    .exec(function (err, listings) {
      res.render("user/index", { title: "User Profile", listings });
    });
}
