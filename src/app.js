const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const hbs = require("hbs");
const routes = require("./routes/main");
const mongoose = require("mongoose");
const connectDB = require("../config/dbConnect");
const parser = require("body-parser");
// const Details = require("./models/User");
app.use(
  parser.urlencoded({
    extended: true,
  })
);
app.use("/static", express.static("public"));

app.use("", routes);

connectDB();
//template engine
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

app.listen(process.env.PORT | 5556, () => {
  console.log("SERVER STARTED RUNNING-------", process.env.PORT);
});
