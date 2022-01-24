import React from 'react';
import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./SCSS/Watch.css";

const Watch = () => {
    return (
        
        <div className='watch'>
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>

            <video className='video' autoPlay progress controls src="https://www.videolinks.com/pub/media/videolinks/video/hero10.mp4"></video>
        </div>
    );
};

export default Watch;
