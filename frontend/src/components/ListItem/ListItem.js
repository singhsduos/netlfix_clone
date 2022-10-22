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

const ListItem = ({ index, item }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get("https://neelesh-netflix.herokuapp.com/api/movies/find/" + item, {
                    headers: {
                        token:
                            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                    },
                }

                );
                setMovie(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getMovie();
    }, [item]);


    return (

        <Link to="/watch" state={{ movie: movie }}>

            <div className='listItem'
                style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}

            >
                <img
                    src={movie.imgSm}
                    alt="Thumbnail"
                />
                {isHovered && (
                    <>
                        <video src={movie.trailer} autoPlay={true} loop muted typeof='video/mp4' preload="auto" />

                        <div className="itemInfo">
                            <div className="icons">
                                <PlayArrow className="icon" />
                                <Add className="icon" />
                                <ThumbUpAltOutlined className="icon" />
                                <ThumbDownOutlined className="icon" />
                            </div>
                            <div className="itemInfoTop">
                                <span>{movie.title}</span>
                                <span className="limit">+{movie.limit}</span>
                                <span>{movie.year}</span>
                                <span>{movie.duration}</span>
                            </div>

                            <div className="desc">
                                {movie.desc}
                            </div>

                            <div className="genre">
                                {movie.genre}
                            </div>

                        </div>

                    </>
                )}
            </div>

        </Link>
    );
};

export default ListItem;
