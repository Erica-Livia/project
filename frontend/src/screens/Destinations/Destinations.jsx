import React from "react";
import { Card } from "../../components/Card";
import { Menu } from "../../components/Menu";
import "./style.css";

export const Destinations = () => {
  return (
    <div className="destinations">
      <Menu state="logged-in" />
      <div className="sidebar">
        <div className="item">
          <div className="title-4">Interests</div>
          <img className="img" alt="Frame" src="https://c.animaapp.com/6YPq8HBQ/img/frame-3.svg" />
        </div>
        <div className="item">
          <div className="title-4">Regions</div>
          <img className="img" alt="Frame" src="https://c.animaapp.com/6YPq8HBQ/img/frame-2.svg" />
        </div>
        <div className="item">
          <div className="title-4">Activity Type</div>
          <img className="img" alt="Frame" src="https://c.animaapp.com/6YPq8HBQ/img/frame-1.svg" />
        </div>
        <div className="item-2">
          <div className="title-4">Price Range</div>
          <img className="img" alt="Frame" src="https://c.animaapp.com/6YPq8HBQ/img/frame.svg" />
        </div>
      </div>
      <div className="cards">
        <Card state="default" />
        <Card state="default" />
        <Card state="default" />
      </div>
      <div className="cards">
        <Card state="default" />
        <Card state="default" />
        <Card state="default" />
      </div>
      <div className="frame-4">
        <img
          className="icon-arrow-ios-back"
          alt="Icon arrow ios back"
          src="https://c.animaapp.com/6YPq8HBQ/img/---icon--arrow-ios-back-@2x.png"
        />
        <div className="frame-5">
          <div className="text-wrapper-3">1</div>
        </div>
        <div className="frame-6">
          <div className="text-wrapper-3">2</div>
        </div>
        <div className="frame-6">
          <div className="text-wrapper-3">3</div>
        </div>
        <img
          className="icon-arrow-ios"
          alt="Icon arrow ios"
          src="https://c.animaapp.com/6YPq8HBQ/img/---icon--arrow-ios-forward-@2x.png"
        />
      </div>
      <img className="vector" alt="Vector" src="https://c.animaapp.com/6YPq8HBQ/img/vector-200-1.svg" />
      <div className="container">
        <div className="title-5">Popular Tourist Attractions</div>
        <p className="description">Discover the must-visit places in Burundi.</p>
        <button className="button">
          <div className="title-wrapper">
            <div className="title-6">Explore More</div>
          </div>
        </button>
        <div className="list">
          <div className="item-3">
            <div className="icon-wrapper">
              <div className="icon">🏞️</div>
            </div>
            <div className="frame-7">
              <div className="title-7">Kibira National Park</div>
              <div className="subtitle-2">Bujumbura</div>
            </div>
            <div className="subtitle-3">Rated 4.8/5</div>
          </div>
          <div className="item-3">
            <div className="icon-wrapper">
              <div className="icon">🏛️</div>
            </div>
            <div className="frame-7">
              <div className="title-7">Gitega National Museum</div>
              <div className="subtitle-2">Gitega</div>
            </div>
            <div className="subtitle-3">Rated 4.6/5</div>
          </div>
          <div className="item-3">
            <div className="icon-wrapper">
              <div className="icon">⛰️</div>
            </div>
            <div className="frame-7">
              <div className="title-7">Ruvubu National Park</div>
              <div className="subtitle-2">Karuzi</div>
            </div>
            <div className="subtitle-3">Rated 4.7/5</div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="map-container">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <p className="p">Explore Burundi&#39;s top attractions on the map.</p>
              <img
                className="ic-location"
                alt="Ic location"
                src="https://c.animaapp.com/6YPq8HBQ/img/ic-location.svg"
              />
            </div>
          </div>
        </div>
        <img className="vector-2" alt="Vector" src="https://c.animaapp.com/6YPq8HBQ/img/vector-200.svg" />
      </div>
      <div className="frame-wrapper">
        <div className="frame-8">
          <div className="logo-2">
            <div className="text-wrapper-4">Wanderlust</div>
          </div>
          <div className="container-2">
            <div className="title-8">Contact</div>
            <div className="title-9">Terms &amp; Conditions</div>
            <div className="title-10">Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};
