const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    review: {
      type: String,
      default: "n/a"
    },
    pages: {
      type: String,
      default: "n/a"
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    price: {
      type: String,
      default: "n/a"
    },
    reviewerId: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
); // will add timestamps for all entries

const Book = mongoose.model("Book", bookSchema);

module.exports = { Book };
