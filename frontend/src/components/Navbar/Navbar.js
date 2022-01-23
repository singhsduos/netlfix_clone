import React, { useState } from 'react';
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import "./SCSS/Navbar.css";

const Navbar = () => {

    // change the navbar color onscrolling
    const [isScrolled, setScrolled] = useState(false);

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
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>

                <div className="right">
                    <Search className='icon' />
                    <span>KID</span>
                    <Notifications className='icon' />
                    <img src="https://res.cloudinary.com/betterkart/image/upload/v1642687502/avatars/ytby409w0txcp4ihr4tk.png"
                        alt="user-profile-pic"
                    />
                    <div className="profile">
                        <ArrowDropDown className='icon' />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
