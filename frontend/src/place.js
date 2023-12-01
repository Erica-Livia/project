import React from "react";
import './place.css';
import Card from "./card";
import Popular from "./popular";

const Place = ({ img, img1, img2, title, shortdesc, desc, price}) => {
    return (
        <>
        <div className="place-description">
          <div className="frame-7">
            <div className="text-wrapper-3">Gishora Drum Sanctuary</div>
          </div>
          <div className="images">
          <img className="img"  src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0f/e6/f5/a7.jpg" />
          <img className="img2" alt="" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/60/54/fc/caption.jpg?w=300&h=300&s=1"/>
          <img className="img1" alt="" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d2/0e/05/caption.jpg?w=300&h=300&s=1" />
          
          </div>
          <div className="summary">
            <p>

            </p>
          </div>
          <div className="like">
          <p>You might also like...</p>
            <div className="frame-5">
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
        </div>
      
      </div>
      
       
    </div>
        </>
    )}

export default Place;