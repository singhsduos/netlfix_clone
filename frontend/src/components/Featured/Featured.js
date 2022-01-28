import React, { useEffect, useState } from 'react';
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { Button} from "@material-ui/core";
import "./SCSS/Featured.css";
import axios from 'axios';

const Featured = ({ type, setGenre }) => {
    const [content, setContent] = useState({});

    useEffect(() => {
        const getRandomContent = async () => {
          try {
              const res = await axios.get(`https://neelesh-netflix.herokuapp.com/api/movies/random?type=${type}`,
                  {
                      headers: {
                          token:
                              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                      },
                  }
              );
              setContent(res.data[0]);
          } catch (err) {
              console.log(err);
          }
        }
        getRandomContent();
    }, [type]);
    

    return (
        <div className='featured'>
            
            {type && (
                <div className="category">
                    <span>{type === "movies" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre" onChange={e => setGenre(e.target.value)}>
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
                src={content.img}
                alt=""
            />
            <div className="info">
                
                <img
                    src={content.imgTitle}
                    alt=""
                />
                <span className='desc'>
                    {content.desc}
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
