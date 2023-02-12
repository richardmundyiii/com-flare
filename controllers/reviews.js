const Listing = require("../models/listing");

module.exports = {
  create,
  delete: deleteReview,
};

function create(req, res) {
  Listing.findById(req.params.id, (err, listing) => {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    listing.review.push(req.body);
    listing.save((err) => {
      res.redirect(`listings/${listing._id}`);
    });
  });
}

function deleteReview() {}
