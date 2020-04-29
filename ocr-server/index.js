const express = require("express");
const app = express();
const multer = require("multer");
const { createWorker } = require("tesseract.js");
const cors = require("cors");
const worker = createWorker();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const http = require("http").createServer(app);
const bodyParser = require("body-parser");
exports.rootDirectory = __dirname;

const corsOptions = {
  origin: true,
  optionsSuccessStatus: 204,
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Access-Control-Allow-Methods",
    "Access-Control-Request-Headers",
  ],
  credentials: true,
};

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
const config = require("./config/config");

// connect to database
mongoose
  .connect(config.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

// middleware
app.use("/Files", express.static("Files"));
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//   model for database
const Bill = require("./api/models/Bill");

// routes
const routes = require("./api/routes");
app.use("/bill", routes);

// home page not exist
app.get("/", function (req, res, next) {
  res.status(403).send("FORBIDDEN");
});
// Listening
http.listen(port, function () {
  console.log(" REST API server Started on " + port);
});
