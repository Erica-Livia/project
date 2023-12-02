import React from "react";
import './place.css';
import Card from "../components/card";
import Popular from "../components/popular";
import { Link } from "react-router-dom";

const Vivant = () => {
    return (
        <>
        <div className="place-description">
          <div className="place">
            <div className="text-wrapper-3"><Link to='/destinations' className="link">Destinations</Link> - Bujumbura Living Museum</div>
          </div>
          <div className="images">
          <img className="gshr"  src="https://pbs.twimg.com/media/EQQBFmFXsAATDz6.jpg:large" />
          <img className="gshr1" alt="" src="https://img.static-rmg.be/a/view/q75/w1280/h0/4398654/belgaimage-191505424-jpg.jpg"/>
          <img className="gshr2" alt="" src="https://travel2unlimited.com/wp-content/uploads/2015/02/5-12.jpg" />
          </div>
          <div className="location"><p><strong>Region: Kabondo - Bujumbura</strong></p></div>
          <div className="summary">
            <p>
            The Bujumbura Living Museum is a zoo and museum in Burundi . The museum is located in Bujumbura , the country's largest city and former capital until 2018;
             it is one of two public museums in the country.<br></br>
             The museum was founded on June 18, 1977 and occupies an area of 3​ ha in the vicinity of rue du October 13 in downtown Bujumbura. It is dedicated to the wildlife and art of Burundi 1 .<br></br>
             In December 2016, the zoo's collection included six crocodiles , a monkey , a leopard , two chimpanzees , three guinea fowl , a turtle , an antelope and a number of snakes and fish in an aquarium. 
             A number of Burundian artisans also have workshops on the museum premises. Several different types of trees stand in the park, next to a reconstruction of a traditional Burundian house ( rugo ). <br></br>
             The number of visitors to the museum fell sharply following the Burundian unrest and demonstrations of 2015 , causing a wider drop in the number of tourists in the country 
           </p>
          </div>
          <div className="like">
          <p>You might also like...</p>
            <div className="frame-5">
            <Card 
          img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d2/0e/05/caption.jpg?w=300&h=300&s=1"
          title="Gishora Drum Sanctuary"
         
          shortdesc={"Gishora Drum Sanctuary is a mesmerizing cultural haven nestled in the heart of Burundi."}
          link="/gishora"
          
      />
          <Card 
          img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d2/0e/05/caption.jpg?w=300&h=300&s=1"
          title="Gasumo Waterfalls"
          price="$12"
          shortdesc={"Gishora Drum Sanctuary is a mesmerizing cultural haven nestled in the heart of Burundi."}
          link="/gasumo"
      />
          <Card 
          img="https://i.pinimg.com/originals/ab/35/b2/ab35b253ac309e29dafaa7388af37202.jpg"
          title="Rumonge Natural Reserve"
           
          shortdesc={""}
          link="/rumonge"
      />
          <Card 
          img="https://travel2unlimited.com/wp-content/uploads/2015/02/5-12.jpg"
          title="Nightlife of Bujumbura"
          price="$5"
          shortdesc={"Zoo, Like everyone es"}
          link="/nightlife"
      />
        </div>
      
      </div>
      
       
    </div>
        </>
    )}

export default Vivant;