import React from "react";
import './popular.css';
import { Link } from "react-router-dom";

const Popular = () => {
    return (
        <>
        <div className="container">
          <p>Popular Tourist Attractions</p>
          <p className="description">Discover the must-visit places in Burundi.</p>
          <div className="list">
            <div className="item-4">
            <div className="icon-wrapper">
                <img src="https://i0.wp.com/fortuneofafrica.com/burundi/wp-content/uploads/sites/8/2013/07/Kibira_Forest.jpg?resize=375%2C500" className="img1" />
              </div>
              <div className="frame-7">
                <div className="title-11">Kibira National Park</div>
                <div className="subtitle-2">Bujumbura</div>
              </div>
              <div className="subtitle-3">Rated 4.8/5</div>
            </div>
            <div className="item-4">
              <div className="icon-wrapper">
                <img src="https://lionelntasano.files.wordpress.com/2021/10/musee-national-de-gitega.jpg" />
              </div>
              <div className="frame-7">
                <div className="title-11">Gitega National Museum</div>
                <div className="subtitle-2">Gitega</div>
              </div>
              <div className="subtitle-3">Rated 4.6/5</div>
            </div>
            <div className="item-4">
            <div className="icon-wrapper">
                <img src="https://img.ev.mu/images/attractions/3958/960x640/757900.jpg" />
              </div>
              <div className="frame-7">
                <div className="title-11">Ruvubu National Park</div>
                <div className="subtitle-2">Karuzi</div>
              </div>
              <div className="subtitle-3">Rated 4.7/5</div>
            </div>
          </div>
          
        </div>
        </>
    )
}

export default Popular;