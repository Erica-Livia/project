/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Card } from "../Card";
import "./style.css";

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
          <div className="title-8">View All</div>
        </div>
      </div>
      <div className="frame-5">
        <Card state="default" />
        <Card state="default" />
        <Card state="default" />
      </div>
    </div>
  );
};

GroupCards.propTypes = {
  featured: PropTypes.oneOf(["activities", "destinations", "culture"]),
};
