import PropTypes from "prop-types";
import React from "react";
import  Card  from "./card";
import './css/groupcard.css';
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
         
          shortdesc={"Gishora Drum Sanctuary is a mesmerizing cultural haven nestled in the heart of Burundi."}
          link="/gishora"
          
      />
         <Card 
          img="https://travel2unlimited.com/wp-content/uploads/2015/02/5-12.jpg"
          title="Musée Vivant"
          
          shortdesc={"The Bujumbura Living Museum is a zoo and museum in Burundi . The museum is located in Bujumbura "}
          link="/museevivant"
      />
      <Card 
          img="https://live.staticflickr.com/4827/45330425754_112571cca4_b.jpg"
          title="Lake Tanganyika"
          
          shortdesc={"Bujumbura’s Lake Tanganyika beaches are some of the best urban beaches of any landlocked country."}
          link="/sagaplage"
      />
      <Card 
          img="https://i.pinimg.com/originals/ab/35/b2/ab35b253ac309e29dafaa7388af37202.jpg"
          title="Teza Tea Plantation"
          
          shortdesc={"You can’t miss the Agro-tourism experience in Teza Tea Plantations"}
          link="/teza"
      />
      <Card 
          img="https://pbs.twimg.com/media/FabmRC5XgAAyPEV.jpg"
          title="Karera Waterfalls"
           
          shortdesc={"You can’t miss the Agro-tourism experience in Teza Tea Plantations "}
          link="/karera"
      />
      <Card 
          img="https://www.oldsite.transnational.org/SAJT/bilder2/burundipics/gitega_museum_3.jpg"
          title="National Museum"
           
          shortdesc={"Bujumbura’s Lake Tanganyika beaches are some of the best urban beaches of any landlocked country in Africa."}
          link="/museenationale"
      />
        </div>
      </div>
    );
  };
  
  GroupCards.propTypes = {
    featured: PropTypes.oneOf(["activity", "destination", "culture"]),
  };
  
export default GroupCards;