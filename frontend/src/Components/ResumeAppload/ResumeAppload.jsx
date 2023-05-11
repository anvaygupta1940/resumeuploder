import React, { useRef, useState } from 'react'
import "./ResumeAppload.css";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import axios from "axios";
import { useNavigate } from "react-router-dom";


const ResumeAppload = () => {
    const preference = useRef();
    const availability = useRef();
    const workExperience = useRef();
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log("Clicked");
        // creating new post
        const newResume = {
            preference: preference.current.value,
            availability: availability.current.value,
            workExperience: workExperience.current.value
        }

        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("file", file);
            data.append("name", fileName);
            newResume.resumeFileName = fileName;
            try {
                await axios.post("/upload", data);
            } catch (err) {
                console.log(err);
            }
        }


        try {
            await axios.post("/resume", newResume);
            // referesh the page after adding post
            navigate("/");
        } catch (err) {
            console.log("Post not apploaded successfully")
        }
    }
    return (
        <div className='ResumeAppload'>
            <div className='ResumeApploadLeft'>
                <div className='ResumeApploadLeftWrapper'>
                    <h1>Add Your Resume</h1>
                    <p>Appload your resume and reach thousands of active employers</p>
                    <form className='resumeClass' onSubmit={submitHandler}>
                        <select id='preference' ref={preference}>
                            <option value="preference">Select Preference</option>
                            <option value="Work from Home">Work from Home</option>
                            <option value="Work from Office">Work from Office</option>
                        </select>
                        <select id='availability' ref={availability}>
                            <option value="availability">Select Availabilty</option>
                            <option value="immediate">Immediate</option>
                            <option value="one month notice">One month Notice</option>
                        </select>
                        <textarea placeholder='Previous work experience (if done)' ref={workExperience} rows="8" cols="40"
                        ></textarea>
                        <p className='upploadResume'>Upload Resume</p>
                        <input type='file' accept=".pdf" onChange={(e) => {
                            setFile(e.target.files[0])
                        }}></input>
                        <p className='formatAcceptance'>We accept your resume in .pdf format</p>
                        <p>Resume Privacy</p>
                        <div className='privacyPolicy'>
                            <input type='checkbox'></input>
                            <span>Your Resume can be seen by people Publically</span>
                        </div>
                        <button type='submit' className='submitResume'>Submit Resume</button>
                    </form>
                </div>
            </div>
            <div className='ResumeApploadRight'>
                <div className='ResumeApploadRightWrapper'>
                    <img src='images/finalResumeImage.jpg' alt='Resume_page_photo'></img>
                    <p>Uploading a resume makes applying and finding jobs easy</p>
                    <div className='keyFeature'>
                        <div className='feature'>
                            <CheckCircleOutlineIcon style={{ color: "darkblue" }}></CheckCircleOutlineIcon>
                            <span>Make your resume public to be visible to Hiring Managers and Employers</span>
                        </div>
                        <div className='feature'>
                            <CheckCircleOutlineIcon style={{ color: "darkblue" }}></CheckCircleOutlineIcon>
                            <span>Speed Up the Application Process with Quick Apply.
                                You can apply to jobs with just one click!</span>
                        </div>
                        <div className='feature'>
                            <CheckCircleOutlineIcon style={{ color: "darkblue" }}></CheckCircleOutlineIcon>
                            <span>See Similar job titles and skills to help you make your next move</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeAppload
