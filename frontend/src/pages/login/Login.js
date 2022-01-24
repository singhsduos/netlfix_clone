import React, { useContext, useState } from 'react';
import { Button } from "@material-ui/core";
import "./SCSS/Login.css";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='login'>
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt="netflix"
                    />
                </div>
            </div>

            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" name="email" placeholder='Email or phone number' />
                    <input type="password" name="password" placeholder='Password' />
                    <Button className="loginButton">Sign-In</Button>
                    <span>
                        New to Netflix? <b>Sign up now.</b>
                    </span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a
                        bot. <b>Learn more</b>.
                    </small>
                </form>

            </div>

        </div>
    );
};

export default Login;
