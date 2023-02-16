const Listing = require("../models/listing");

module.exports = {
  create,
  deleteReview,
};

function create(req, res) {
  Listing.findById(req.params.id, (err, listing) => {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    listing.review.push(req.body);
    listing.save((err) => {
      res.redirect(`/listings/${listing._id}`);
    });
  });
}

function deleteReview(req, res) {
  Listing.findOne(
    {
      "review._id": req.params.id,
      "review.user": req.user._id,
    },
    function (err, listing) {
      if (!listing || err) return res.redirect(`/listings/${listing._id}`);
      listing.review.remove(req.params.id);
      listing.save(function (err) {
        res.redirect(`/listings/${listing._id}`);
      });
    }
  );
}
