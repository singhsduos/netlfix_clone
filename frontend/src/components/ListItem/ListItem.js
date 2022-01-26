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

const ListItem = ({ index,item }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get("api/movies/find/" + item, {
                    headers: {
                        token:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWViZmIyNzNlMzc1NmU5NGQ1MzIzNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzEyNDM1OCwiZXhwIjoxNjQzNTU2MzU4fQ.XkDqWyTKBhDULxL1eDst9aNncgjcpId1OVxm6FscGfE",
                    },
                });
                setMovie(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getMovie();
    }, [item]);

    return (

        <Link to="/watch" state={{movie:movie}}>
    
        <div className='listItem'
            style={{ left: isHovered && index * 225 - 60 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}

        >
            <img
                src={movie.img}
                alt=""
            />
            {isHovered && (
                <>
                    <video src={movie.trailer} autoPlay={true} loop muted typeof='video/mp4' preload="auto"/>

                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon" />
                            <Add className="icon" />
                            <ThumbUpAltOutlined className="icon" />
                            <ThumbDownOutlined className="icon" />
                        </div>
                        <div className="itemInfoTop">
                            <span>{movie.duration}</span>
                            <span className="limit">+{movie.limit}</span>
                            <span>{movie.year}</span>
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
