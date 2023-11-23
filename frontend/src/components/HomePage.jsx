import React from "react";
import { GroupCards } from "./GroupCards";
import { Menu } from "./Menu";
import { Tab } from "./Tab";

const HomePage = () => {
  return (
    <div className="home-page">
      <Menu destinationClassName="menu-instance" state="logged-in" />
      <div className="hero-section">
        <div className="section">
          <div className="map-container">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <p className="p">Explore Burundi&#39;s top attractions on the map.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-6">
        <Tab className="tab-instance" frame="https://c.animaapp.com/mudMg3Nq/img/frame-2.svg" option="destination" />
        <div className="group-cards-wrapper">
          <GroupCards featured="destinations" />
        </div>
      </div>
      <div className="section-2">
        <img className="vector" alt="Vector" src="https://c.animaapp.com/mudMg3Nq/img/vector-200-2.svg" />
        <div className="container">
          <div className="title-9">Popular Tourist Attractions</div>
          <p className="description">Discover the must-visit places in Burundi.</p>
          <button className="button">
            <div className="title-wrapper">
              <div className="title-10">Explore More</div>
            </div>
          </button>
          <div className="list">
            <div className="item-4">
              <div className="icon-wrapper">
                <div className="icon">🏞️</div>
              </div>
              <div className="frame-7">
                <div className="title-11">Kibira National Park</div>
                <div className="subtitle-2">Bujumbura</div>
              </div>
              <div className="subtitle-3">Rated 4.8/5</div>
            </div>
            <div className="item-4">
              <div className="icon-wrapper">
                <div className="icon">🏛️</div>
              </div>
              <div className="frame-7">
                <div className="title-11">Gitega National Museum</div>
                <div className="subtitle-2">Gitega</div>
              </div>
              <div className="subtitle-3">Rated 4.6/5</div>
            </div>
            <div className="item-4">
              <div className="icon-wrapper">
                <div className="icon">⛰️</div>
              </div>
              <div className="frame-7">
                <div className="title-11">Ruvubu National Park</div>
                <div className="subtitle-2">Karuzi</div>
              </div>
              <div className="subtitle-3">Rated 4.7/5</div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-3">
        <div className="container-2">
          <p className="title-12">Why Choose Our Tour Guides?</p>
          <p className="text-wrapper-4">Our knowledgeable guides will ensure you have an unforgettable experience.</p>
          <div className="button-2">
            <div className="seconday-2">
              <div className="title-13">Contact Us</div>
            </div>
            <div className="primary-2">
              <div className="title-10">Learn More</div>
            </div>
          </div>
        </div>
        <div className="list-2">
          <div className="row">
            <div className="article">
              <div className="image-wrapper">
                <div className="image-2" />
              </div>
              <div className="frame-8">
                <div className="title-14">Expertise</div>
                <div className="subtitle-4">Experience Matters</div>
                <p className="subtitle-5">
                  Our guides are highly knowledgeable and experienced in the local attractions, history, and culture of
                  Burundi.
                </p>
                <div className="selection">
                  <div className="label-normal">
                    <div className="label-text">Safety</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">Culture</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">History</div>
                  </div>
                </div>
                <div className="user">
                  <div className="avatar">
                    <div className="avatar-2" />
                    <div className="frame-9">
                      <div className="title-15">John Doe</div>
                    </div>
                  </div>
                  <div className="icon-buttons">
                    <div className="icon-2">🌟</div>
                    <div className="icon-2">✉️</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="article">
              <div className="image-wrapper">
                <div className="image-2" />
              </div>
              <div className="frame-8">
                <div className="title-14">Personalized Service</div>
                <div className="subtitle-4">Tailored Tours</div>
                <p className="text-wrapper-4">
                  Our guides cater to individual preferences and adapt the tour according to your interests and needs.
                </p>
                <div className="selection">
                  <div className="label-normal">
                    <div className="label-text">Flexibility</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">Hospitality</div>
                  </div>
                </div>
                <div className="user">
                  <div className="avatar">
                    <div className="avatar-2" />
                    <div className="frame-9">
                      <div className="title-15">Jane Doe</div>
                    </div>
                  </div>
                  <div className="icon-buttons">
                    <div className="icon-2">🌟</div>
                    <div className="icon-2">✉️</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="vector-2" alt="Vector" src="https://c.animaapp.com/mudMg3Nq/img/vector-200-1.svg" />
      </div>
      <div className="section-3">
        <div className="container-2">
          <div className="title-12">What Our Customers Say</div>
          <p className="text-wrapper-4">Read the reviews from travelers who have experienced the wonders of Burundi.</p>
          <button className="button">
            <div className="title-wrapper">
              <div className="title-10">Write a Review</div>
            </div>
          </button>
        </div>
        <div className="list-3">
          <div className="card-2">
            <div className="avatar-wrapper">
              <div className="avatar">
                <div className="avatar-3" />
                <div className="frame-9">
                  <div className="title-15">Alice Smith</div>
                </div>
              </div>
            </div>
            <p className="title-16">
              The tour guide was fantastic! He was knowledgeable, friendly, and made the experience truly memorable.
            </p>
            <div className="icon-buttons-2">
              <div className="icon-2">👍</div>
              <div className="icon-2">📝</div>
            </div>
          </div>
          <div className="card-2">
            <div className="avatar-wrapper">
              <div className="avatar">
                <div className="avatar-3" />
                <div className="frame-9">
                  <div className="title-15">Bob Johnson</div>
                </div>
              </div>
            </div>
            <p className="title-16">
              I highly recommend booking a tour guide through Wanderlust. They exceeded my expectations in every way.
            </p>
            <div className="icon-buttons-2">
              <div className="icon-2">👍</div>
              <div className="icon-2">📝</div>
            </div>
          </div>
        </div>
        <img className="vector-3" alt="Vector" src="https://c.animaapp.com/mudMg3Nq/img/vector-200-1.svg" />
      </div>
      <div className="frame-wrapper">
        <div className="frame-10">
          <div className="logo-2">
            <div className="text-wrapper-5">Wanderlust</div>
          </div>
          <div className="container-3">
            <div className="title-17">Contact</div>
            <div className="title-18">Terms &amp; Conditions</div>
            <div className="title-19">Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;