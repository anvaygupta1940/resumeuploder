const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema({
    preference: {
        type: String,
        require: true
    },
    availability: {
        type: String,
        require: true
    },
    workExperience: {
        type: String,
        default: ""
    },
    resumeFileName: {
        type: String
    }
}, { timestamps: true }
);

const Resume = mongoose.model("Resume", ResumeSchema);
module.exports = Resume;