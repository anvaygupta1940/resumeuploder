const mongoose = require("mongoose");
const validate = require("validator");


const SignUpSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true,
        unique: true,
        minLength: 6
    },
    password: {
        type: String,
        require: true,
        unique: [true, "Enter a unique password as this password always exist"],
        min: 6
    },
    email: {
        type: String,
        require: true,
        // unique: [true, "Email already exist"],
        // validate(value) {
        //     if (!validator.isEmail(value)) {
        //         throw new Error("Invalid Email");
        //     }
        // }
        unique: true
    },
    contactNo: {
        type: Number,
        minLength: 9,
        unique: true,
        require: true
    },
    country: {
        type: String,
        require: true,
    }
}, {
    timestamps: true
})

const User = mongoose.model("User", SignUpSchema);
module.exports = User;