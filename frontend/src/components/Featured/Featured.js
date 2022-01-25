import React, { useEffect, useState } from 'react';
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { Button} from "@material-ui/core";
import "./SCSS/Featured.css";

const Featured = ({type}) => {
    return (
        <div className='featured'>
            
            {type && (
                <div className="category">
                    <span>{type === "movies" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img
                src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
            />
            <div className="info">
                

                <span className='desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam ad asperiores minus. Unde quas dolorem quisquam qui voluptatibus,
                    quam aliquam deleniti culpa suscipit maiores?
                </span>
                <div className="buttons">
                    <Button className='play'>
                        <PlayArrow />
                        <span>Play</span>
                    </Button>
                    <Button className='more'>
                        <InfoOutlined />
                        <span>Info</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
