const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const saltRounds = 10;
function ID() {
    return Math.random().toString(36).substr(2, 8);
}
const UserSchema = new Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        user_type: {
            type: String,
            enum: ["CUSTOMER", "SHOPKEEPER"],
        },
        user_id: { type: String, default: ID, unique: true },
    },
    {
        timestamps: true,
    }
);

UserSchema.pre("save", function (next) {
    // Check if document is new or a new password has been set
    if (this.isNew || this.isModified("password")) {
        // Saving reference to this because of changing scopes
        const document = this;
        bcrypt.hash(document.password, saltRounds, function (
            err,
            hashedPassword
        ) {
            if (err) {
                next(err);
            } else {
                document.password = hashedPassword;
                next();
            }
        });
    } else {
        next();
    }
});

UserSchema.methods.isCorrectPassword = function (password, callback) {
    bcrypt.compare(password, this.password, function (err, same) {
        if (err) {
            callback(err);
        } else {
            callback(err, same);
        }
    });
};

module.exports = mongoose.model("User", UserSchema);
