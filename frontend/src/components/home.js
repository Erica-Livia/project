import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './css/home.css';
import  GroupCards  from './groupcards';
import Tab from './tab';
import { FaCircleUser } from "react-icons/fa6";
import Popular from './popular';
const Home = () => {
    return (
        <>
        <div className="hero_section">
        <div className="container">
            <p>Explore Burundi&#39;s top attractions on the map.</p>
        </div>
        </div>
        <div className='tab'> 
        <Tab className="tab-instance" frame="https://c.animaapp.com/mudMg3Nq/img/frame-2.svg" option="destination" />
        </div>
        <div className='cards'>
            <GroupCards featured="destinations" />
        </div>
        <div className="destinations">
          <Popular />
        </div>        
        </>
    )
}

export default Home;