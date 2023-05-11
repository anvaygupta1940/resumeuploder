const User = require("../models/User.js");
const router = require("express").Router();
const bcrypt = require("bcrypt");

// creating a user
router.post("/register", async (req, res) => {
    const { firstName, lastName, username, password, confirmPassword, email, contactNo, country } = req.body;
    try {
        if (password === confirmPassword) {
            // const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const user = new User({
                firstName,
                lastName,
                username,
                password: hashedPassword,
                email,
                contactNo,
                country
            });

            const savedUser = await user.save();
            return res.status(200).json(savedUser);
        } else {
            alert("Password doesnt match..")
        }
    } catch (err) {
        return res.status(500).json(err);
    }
})



module.exports = router;