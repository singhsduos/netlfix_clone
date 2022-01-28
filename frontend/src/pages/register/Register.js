import React, { useRef, useState } from 'react';
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SCSS/Register.css";


const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }

    const routeChange = () => {
        navigate("/login");
    }
    const handleFinish = async (e) => {
        e.preventDefault();
        setPassword(passwordRef.current.value);
        setUsername(usernameRef.current.value);
        try {
            await axios.post("api/auth/register", { email, username, password });
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="register">
            
            <div className="top">
                <img
                    className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                />
            </div>

            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                {!email ? (
                    <div className="input">
                        <input type="email" placeholder="Email address" ref={emailRef} />
                        <Button className="registerButton" onClick={handleStart}>
                            Get Started
                        </Button>
                    </div>
                ) : (
                    <form className="input">
                        <input type="username" placeholder="username" ref={usernameRef} />
                        <input type="password" placeholder="password" ref={passwordRef} />
                        <Button className="registerButton" onClick={handleFinish}>
                            Start
                        </Button>
                    </form>
                )}

                <b className='or'>OR</b>

                <Button className="loginButton" onClick={routeChange}>Sign In</Button>

            </div>
        </div>
    );
};

export default Register;
