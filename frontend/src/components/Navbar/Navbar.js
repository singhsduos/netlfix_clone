import React, { useContext, useState } from 'react';
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";
import "./SCSS/Navbar.css";



const Navbar = () => {

    // change the navbar color onscrolling
    const [isScrolled, setScrolled] = useState(false);
    const { dispatch } = useContext(AuthContext);

    window.onscroll = () => {
        setScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };



    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt="netflix logo" />
                    <Link to="/" className='link'>
                    <span>Homepage</span>
                    </Link>
                    <Link to="/series" className='link'>
                        <span className='navbarmainLinks'>Series</span>
                    </Link>
                    <Link to="/movies" className='link'>
                        <span className='navbarmainLinks'>Movies</span>
                    </Link>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>

                <div className="right">
                    <Search className='icon' />
                    <span>KID</span>
                    <Notifications className='icon' />
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632/84c20033850498.56ba69ac290ea.png"
                        alt="user-profile-pic"
                    />
                    <div className="profile">
                        <ArrowDropDown className='icon' />
                        <div className="options">
                            <span>Settings</span>
                            <span onClick={() => dispatch(logout())}>Logout</span>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
