const Resume = require("../models/Resume");
const router = require("express").Router();


// adding resume of user
router.post("/resume", async (req, res) => {
    try {
        const newResume = new Resume(req.body);
        await newResume.save();
        return res.status(200).json("Resume uploaded successfully");
    } catch (err) {
        return res.status(500).json(err);
    }
})
module.exports = router;