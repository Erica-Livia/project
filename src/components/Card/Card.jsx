import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Card = ({ state }) => {
    return (
        <div className="card">
            <div className="image-container">
                <div className="image">
                    <div className="title-4">Tour Guide A</div>
                </div>
            </div>
            <div className="text-content">
                <div className="subtitle">Title</div>
                <div className="title-4">Description</div>
                {state === "active" && (
                    <div className="primary">
                        <div className="title-6">Book Now</div>
                    </div>
                )}
            </div>
        </div>
    );
};

Card.propTypes = {
    state: PropTypes.oneOf(["active", "default"]),
};