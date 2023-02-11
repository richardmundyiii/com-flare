const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  airport: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  seats: {
    type: Number,
    min: 1,
    max: 6,
    required: true,
  },
  ifrRating: {
    type: Boolean,
  },
  imgUrl: {
    type: String,
    required: false,
  },
  host: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  userName: String,
  userAvatar: String,
});

module.exports = mongoose.model("Listing", listingSchema);
