import React, { useEffect, useState } from 'react';
import Featured from '../../components/Featured/Featured';
import List from '../../components/List/List';
import Navbar from '../../components/Navbar/Navbar';
import axios from "axios";
import "./SCSS/Home.css";

const Home = ({ type }) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(
                    `api/lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
                    {
                        headers: {
                            token:
                                "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                        },
                    }
                );
                // console.log(res)
                setLists(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getRandomLists();
    }, [genre, type]);
    

    return (
        <div className='home'>
            <Navbar />
            <Featured type={type} setGenre={setGenre}/>
            {
                lists.map((list) => (
                    <List key={list._id} list={list}/>  
                ))
            }
        </div>
    );
};

export default Home;
