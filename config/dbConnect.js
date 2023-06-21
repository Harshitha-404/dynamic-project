const mongoose = require("mongoose");
const Details = require("../src/models/User");
const Slider = require("../src/models/Slider");
const Service = require("../src/models/Service");
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.db);
    console.log(
      "DB Connected",
      connect.connection.host,
      connect.connection.name
    );

    // Service.create(
    //   {
    //     icon: "fa-solid fa-user-graduate",
    //     title: "Provide Best Courses",
    //     description: "We provide best courses that help students to upskill.",
    //     linkText: "Check",
    //     link: "https://www.google.com/",
    //   },
    //   {
    //     icon: "fa-solid fa-code",
    //     title: "Learn Projects",
    //     description: "We provide best courses that help students to upskill.",
    //     linkText: "Check",
    //     link: "https://www.google.com/",
    //   },
    //   {
    //     icon: "fa-solid fa-gears",
    //     title: "Provide Best Courses",
    //     description: "We provide best courses that help students to upskill.",
    //     linkText: "Check",
    //     link: "https://www.google.com/",
    //   },
    //   {
    //     icon: "fa-solid fa-code-compare",
    //     title: "Provide Best Courses",
    //     description: "We provide best courses that help students to upskill.",
    //     linkText: "Check",
    //     link: "https://www.google.com/",
    //   },
    //   {
    //     icon: "fa-solid fa-file-code",
    //     title: "Provide Best Courses",
    //     description: "We provide best courses that help students to upskill.",
    //     linkText: "Check",
    //     link: "https://www.google.com/",
    //   },
    //   {
    //     icon: "fa-solid fa-code-commit",
    //     title: "Provide Best Courses",
    //     description: "We provide best courses that help students to upskill.",
    //     linkText: "Check",
    //     link: "https://www.google.com/",
    //   }
    // );
    // Slider.create(
    //   {
    //     title: "Learn Java easily",
    //     subitle: "Java is one of the most popular programming language",
    //     imgUrl: "/static/images/s1.jpeg",
    //     class: "active",
    //   },
    //   {
    //     title: "Learn Express.js",
    //     subitle: "Express.js is the framework of Nodejs",
    //     imgUrl: "/static/images/s3.jpeg",
    //     class: "",
    //   },

    //   {
    //     title: "Learn Javascript easily",
    //     subitle: "Javascript is one of the most popular programming language",
    //     imgUrl: "/static/images/s4.jpeg",
    //     class: "",
    //   }
    // );
    // Details.create({
    //   brandName: "WEB APP",
    //   brandIconUrl:
    //     "https://cdn.dribbble.com/userupload/3158903/file/original-3f5abe8b99ff4ba4626ddf6660115182.jpg?compress=1&resize=752x",
    //   links: [
    //     {
    //       label: "Home",
    //       url: "/",
    //     },
    //     {
    //       label: "Services",
    //       url: "/services",
    //     },
    //     {
    //       label: "Gallery",
    //       url: "/gallery",
    //     },
    //     {
    //       label: "About",
    //       url: "/about",
    //     },
    //     {
    //       label: "Contact Us",
    //       url: "/contact-us",
    //     },
    //   ],
    // });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
