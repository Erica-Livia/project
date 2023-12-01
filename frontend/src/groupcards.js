import PropTypes from "prop-types";
import React from "react";
import  Card  from "./card";
import './groupcard.css';
import { Link } from 'react-router-dom';

export const GroupCards = ({ featured }) => {
    return (
      <div className="group-cards">
        <div className="frame-4">
          <div className="title-7">
            {featured === "destinations" && <>Top Destinations</>}
  
            {featured === "culture" && <>Unforgettable cultural experiences</>}
  
            {featured === "activities" && <>Activities</>}
          </div>
          <div className="seconday">
            <div className="title-8"><Link to='/destinations' className="link">View All</Link></div>
          </div>
        </div>
        <div className="frame-5">
          <Card 
          img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d2/0e/05/caption.jpg?w=300&h=300&s=1"
          title="Gishora Drum Sanctuary"
          price="$12"
          shortdesc={"Gishora Drum Sanctuary is a mesmerizing cultural haven nestled in the heart of Burundi."}
          
      />
         <Card 
          img="https://travel2unlimited.com/wp-content/uploads/2015/02/5-12.jpg"
          title="Musée Vivant"
          price="$5"
          shortdesc="Zoo, Like everyone es"
      />
      <Card 
          img="https://live.staticflickr.com/4827/45330425754_112571cca4_b.jpg"
          title="Lake Tanganyika - Saga Plage"
          price=""
          shortdesc={""}
      />
      <Card 
          img="https://i.pinimg.com/originals/ab/35/b2/ab35b253ac309e29dafaa7388af37202.jpg"
          title="Teza Tea Plantation"
          price=""
          shortdesc={""}
      />
      <Card 
          img="https://pbs.twimg.com/media/FabmRC5XgAAyPEV.jpg"
          title="Karera Waterfalls"
          price=""
          shortdesc={""}
      />
      <Card 
          img="https://www.oldsite.transnational.org/SAJT/bilder2/burundipics/gitega_museum_3.jpg"
          title="Gitega's National Museum"
          price=""
          shortdesc={""}
      />
        </div>
      </div>
    );
  };
  
  GroupCards.propTypes = {
    featured: PropTypes.oneOf(["activity", "destination", "culture"]),
  };
  
export default GroupCards;