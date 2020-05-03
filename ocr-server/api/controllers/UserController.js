const mongoose = require("mongoose");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { secretKey } = require("../../config/config");

exports.create_user = (req, res, next) => {
    const { email, password, firstName, lastName } = req.body;
    const user = new User({
        email,
        password,
        first_name: firstName,
        last_name: lastName,
    });
    user.save(function (err) {
        if (err) {
            res.status(500).send(
                "Error registering new user please try again."
            );
        } else {
            res.status(200).send("user Registered");
        }
    });
};

exports.authenticate = (req, res, next) => {
    const { email, password } = req.body;

    User.findOne({ email }, function (err, user) {
        if (err) {
            console.error(err);
            res.status(500).json({
                error: "Internal error please try again",
            });
        } else if (!user) {
            res.status(401).json({
                error: "Incorrect email or password",
            });
        } else {
            user.isCorrectPassword(password, function (err, same) {
                if (err) {
                    res.status(500).json({
                        error: "Internal error please try again",
                    });
                } else if (!same) {
                    res.status(401).json({
                        error: "Incorrect email or password",
                    });
                } else {
                    // Issue token
                    const payload = { email };
                    const token = jwt.sign(payload, secretKey, {
                        expiresIn: "1h",
                    });
                    res.cookie("token", token, { httpOnly: true }).sendStatus(
                        200
                    );
                }
            });
        }
    });
};

exports.logout = (req, res, next) => {
    res.clearCookie("token", { httpOnly: true }).sendStatus(200);
};
