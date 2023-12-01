import PropTypes from "prop-types";
import React, { useState } from 'react';
import "./card.css";
import { Link } from "react-router-dom";



const Card = ({ img, title, shortdesc, price}) => {
    const [state] = useState([]);
    return (
        <>
        <div className="card">
            <div className="image-container">
                <div className="image">
                    <img src={img} alt={title} className="image" />
                </div>
            </div>

            <div className="text-content">
                <h3 className="subtitle">{title}</h3>
                <h5 className="title-4">{shortdesc}</h5>
                <h4 className="price">{price}</h4>
                {/* {state === "default" && ( */}
                    <div className="primary">
                        <div className="title-6"><Link to='/place' className="link">View More</Link></div>
                    </div>
                  {/* )} */}
            </div>
        </div>
        </>
    );
};
 
Card.propTypes = {
    state: PropTypes.oneOf(["active", "default"]),
};


export default Card;