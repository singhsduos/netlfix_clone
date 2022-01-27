import React, { useContext, useState } from 'react';
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import {Link} from "react-router-dom";
import { Button } from "@material-ui/core";
import "./SCSS/Login.css";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { dispatch } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        login({ email, password }, dispatch);
    };

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
                    <input type="email" name="email" placeholder='Email or phone number' onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" name="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                    <Button className="loginButton" onClick={handleLogin}>Sign-In</Button>
                    <span>
                        New to Netflix? <Link to="/register"> <b>Sign up now.</b> </Link>
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
