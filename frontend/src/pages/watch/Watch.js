import React from 'react';
import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation} from "react-router-dom";
import "./SCSS/Watch.css";

const Watch = () => {
    const location = useLocation();
    const { movie } = location.state;
    console.log(movie);
    return (
        
        <div className='watch'>
            <Link to="/">
            <div className="back">
                <ArrowBackOutlined />
                Home
                </div>
            </Link>   

            <video className='video' autoPlay progress={true.toString()} controls src={movie.video}></video>
        </div>
    );
};

export default Watch;
