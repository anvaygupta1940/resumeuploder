const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRouter = require("./routes/Auth.js");
const resumeRouter = require("./routes/Resume.js");
const multer = require("multer");
const cors = require("cors");
const path = require("path");




// MIDDLEWARE CONFIGURATIONS
dotenv.config();
app.use(express.json());
app.use(cors());





// connecting server with database
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Server is connected with database");
}).catch((err) => {
    console.log("Server is connected with database");
})




// api paths
app.use("/api/auth", userRouter);
app.use("/api", resumeRouter);




// Storage engine for multer
// how to appload pdf inside server  :--

// specifying destination and filename
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/resume/");
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + "_" + path.extname(file.originalname)); // we are gonna send this name inside our react application
    },
})

const upload = multer({
    storage
});
app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
        // console.log(req.file);
        return res.status(200).json("File Uploaded Successfully !!");
    } catch (err) {
        res.status(400).json("Something went wrong");
    }
});




// creating server
app.listen(process.env.PORT, () => {
    console.log(`Server is listening at port ${process.env.PORT}`);
})