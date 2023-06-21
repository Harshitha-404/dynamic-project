const express = require("express");
const route = express.Router();
const Details = require("../models/User");
const Slider = require("../models/Slider");
const Service = require("../models/Service");
const Contact = require("../models/Contacts");
route.get("/", async (req, res) => {
  const details = await Details.findOne({ _id: "646900ce0bda3e9bc995ffe5" });
  const slider = await Slider.find();
  const service = await Service.find();
  //console.log(details);
  res.render("index", {
    details: details,
    slider: slider,
    service: service,
  });
});
route.get("/gallery", async (req, res) => {
  const details = await Details.findOne({ _id: "646900ce0bda3e9bc995ffe5" });
  const slider = await Slider.find();
  res.render("gallery", {
    details: details,
    slider: slider,
  });
});

route.post("/process-contact-form", async (req, res) => {
  console.log(req.body);
  try {
    const data = await Contact.create(req.body);
    console.log(data, "data----");
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});

module.exports = route;
