import React, { useRef } from 'react';
import "./SignUp.css";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LanguageIcon from '@mui/icons-material/Language';
import TelegramIcon from '@mui/icons-material/Telegram';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const firstName = useRef();
    const lastName = useRef();
    const username = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    const email = useRef();
    const contactNo = useRef();
    const country = useRef();
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        // console.log("Clicked");
        e.preventDefault();
        // console.log(firstName.current.value);
        // console.log(lastName.current.value);
        // console.log(username.current.value);
        // console.log(password.current.value);
        // console.log(confirmPassword.current.value);
        // console.log(email.current.value);
        // console.log(contactNo.current.value);
        // console.log(country.current.value);

        if (password.current.value !== confirmPassword.current.value) {
            password.current.setCustomValidity("Password Don't Match");
        } else {
            const user = {
                firstName: firstName.current.value,
                lastName: lastName.current.value,
                username: username.current.value,
                password: password.current.value,
                confirmPassword: confirmPassword.current.value,
                email: email.current.value,
                contactNo: contactNo.current.value,
                country: country.current.value
            };
            try {
                const res = await axios.post("/auth/register", user);
                console.log(res);
                navigate("/resume");
            } catch (err) {
                console.log(err);
            }
        }
    }


    return (
        <div className='signUpContainer'>
            <div className='signUpHeading'>Register YourSelf</div>
            <div className='signUpWrapper'>
                <div className='signUpLeft'>
                    <img src='images/SignUpPage.avif' alt='signup_image'></img>
                </div>
                <div className='signUpRight'>
                    <form className='signUpForm' onSubmit={handleSubmit}>
                        <div className='nameField'>
                            <div className='inputField'>
                                <PersonIcon></PersonIcon>
                                <input type='text' placeholder='First Name' ref={firstName}></input>
                            </div>
                            <div className='inputField'>
                                <PersonIcon></PersonIcon>
                                <input type='text' placeholder='Last Name' ref={lastName}></input>
                            </div>
                        </div>
                        <div className='inputField'>
                            <PersonIcon></PersonIcon>
                            <input type='text' placeholder='Username' ref={username}></input>
                        </div>
                        <div className='inputField'>
                            <PersonIcon></PersonIcon>
                            <input type='password' placeholder='Password' ref={password}></input>
                        </div>
                        <div className='inputField'>
                            <PersonIcon></PersonIcon>
                            <input type='password' placeholder='Confirm Password' ref={confirmPassword}></input>
                        </div>
                        <div className='inputField'>
                            <EmailIcon></EmailIcon>
                            <input type='email' placeholder='E-mail Address' ref={email}></input>
                        </div>
                        <div className='inputField'>
                            <CallIcon></CallIcon>
                            <input type='number' placeholder='Contact No.' ref={contactNo}></input>
                        </div>
                        <div className='inputField'>
                            <LanguageIcon></LanguageIcon>
                            <input type='text' placeholder='Country' ref={country}></input>
                        </div>
                        <button type='submit' className='signUpSubmitBtn'>Submit<TelegramIcon></TelegramIcon></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;