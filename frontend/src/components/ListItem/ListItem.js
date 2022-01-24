import React, { useEffect, useState } from 'react';
import {
    PlayArrow,
    Add,
    ThumbUpAltOutlined,
    ThumbDownOutlined,
} from "@material-ui/icons";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SCSS/ListItem.css";

const ListItem = ({ index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});
    return (
        <div className='listItem'
            style={{ left: isHovered && index * 225 - 60 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}

        >
            <img
                src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
            />
            {isHovered && (
                <>
                    <video src="https://www.videolinks.com/pub/media/videolinks/video/hero10.mp4" autoPlay={true} loop />

                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon" />
                            <Add className="icon" />
                            <ThumbUpAltOutlined className="icon" />
                            <ThumbDownOutlined className="icon" />
                        </div>
                        <div className="itemInfoTop">
                            <span>1 hour 14 mins</span>
                            <span className="limit">+16</span>
                            <span>1999</span>
                        </div>

                        <div className="desc">
                            Lorem ipsum,
                            dolor sit amet consectetur adipisicing elit.
                            Consequatur error, fugiat eius iste maxime quia aut.
                        </div>

                        <div className="genre">
                            Action
                        </div>

                    </div>

                </>
            )}
        </div>
    );
};

export default ListItem;
