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
          <Card state="active"  />
          <Card state="active" />
          <Card state="active" />
          <Card state="active" />
        </div>
      </div>
    );
  };
  
  GroupCards.propTypes = {
    featured: PropTypes.oneOf(["activities", "destinations", "culture"]),
  };
  
export default GroupCards;