const mongoose = require("mongoose");

const Slider = mongoose.Schema({
  title: String,
  subitle: String,
  imgUrl: String,
  class: String,
});

module.exports = mongoose.model("Slider", Slider);
