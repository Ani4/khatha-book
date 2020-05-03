const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const port = process.env.PORT || 5000;
const http = require("http").createServer(app);
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

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
app.use(cors(corsOptions));
app.use(cookieParser());
app.options("*", cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/Files", express.static(path.resolve("./ocr-server/Files")));
app.use(morgan("dev"));

console.log(path.resolve("./ocr-server/Files"));
//   model for database
const Bill = require("./api/models/Bill");
const User = require("./api/models/User");

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
