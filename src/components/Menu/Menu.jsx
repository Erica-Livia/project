import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Menu = ({ state, destinationClassName }) => {
  return (
    <div className="menu">
      <div className="logo">
        <div className="text-wrapper">Wanderlust</div>
      </div>
      <div className={`div ${destinationClassName}`}>
        <img
          className="icon-search"
          alt="Icon search"
          src={
            state === "logged-in"
              ? "https://c.animaapp.com/mudMg3Nq/img/---icon--search--1@2x.png"
              : "https://c.animaapp.com/mudMg3Nq/img/---icon--search--2@2x.png"
          }
        />
        <div className="frame">
          <div className="text-wrapper-2">Search</div>
        </div>
      </div>
      <div className={`frame-2 ${state}`}>
        {state === "default" && (
          <>
            <div className="frame-3">
              <div className="div-wrapper">
                <div className="text-wrapper-3">Destinations</div>
              </div>
              <div className="div-wrapper">
                <div className="text-wrapper-3">Guides</div>
              </div>
              <div className="div-wrapper">
                <div className="text-wrapper-3">Bookings</div>
              </div>
            </div>
            <div className="ellipse" />
          </>
        )}

        {state === "logged-in" && (
          <>
            <div className="div-wrapper">
              <div className="text-wrapper-3">Destinations</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-3">Guides</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-3">Login</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

Menu.propTypes = {
  state: PropTypes.oneOf(["logged-in", "default"]),
};
