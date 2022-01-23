import React from 'react';
import Featured from '../../components/Featured/Featured';
import Navbar from '../../components/Navbar/Navbar';
import "./SCSS/Home/Home.css";

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Featured/>
        </div>
    );
};

export default Home;
