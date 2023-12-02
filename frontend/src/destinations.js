import React from "react";
import './destinations.css';
import  Card from "./card";
import Popular1 from "./popular1";

const Destinations = () => {
    return(
        <>
        <div className="destinations">
        <div className="filter">
        <label className="item">
          <input  type="radio" value="" name="test" />
          <span className="title-4"></span>All
        </label>
        <label className="item">
          <input  type="radio" value="" name="test" />
          <span className="title-4"></span>Cultural Experience
        </label>
        <label className="item">
          <input  type="radio" value="" name="test" />
          <span className="title-4"></span>Destinations
        </label>
        <label className="item">
          <input  type="radio" value="" name="test" />
          <span className="title-4"></span>Activities
        </label>
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
          
          shortdesc={"Zoo, Like everyone es"}
          link="/museevivant"
      />
      <Card 
          img="https://live.staticflickr.com/4827/45330425754_112571cca4_b.jpg"
          title="Lake Tanganyika - Saga Plage"
          
          shortdesc={""}
          link="/sagaplage"
      />
      <Card 
          img="https://i.pinimg.com/originals/ab/35/b2/ab35b253ac309e29dafaa7388af37202.jpg"
          title="Teza Tea Plantation"
           
          shortdesc={""}
          link="/teza"
      />
      <Card 
          img="https://pbs.twimg.com/media/FabmRC5XgAAyPEV.jpg"
          title="Karera Waterfalls"
           
          shortdesc={""}
          link="/karera"
      />
      <Card 
          img="https://www.oldsite.transnational.org/SAJT/bilder2/burundipics/gitega_museum_3.jpg"
          title="Gitega's National Museum"
           
          shortdesc={""}
          link="/museenationale"
      />
      <Card 
          img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d2/0e/05/caption.jpg?w=300&h=300&s=1"
          title="Gasumo Waterfalls"
          price="$12"
          shortdesc={"Gishora Drum Sanctuary is a mesmerizing cultural haven nestled in the heart of Burundi."}
          link="/gasumo"
      />
         <Card 
          img="https://travel2unlimited.com/wp-content/uploads/2015/02/5-12.jpg"
          title="Hiking - Mount Heha"
          price="$5"
          shortdesc={"Zoo, Like everyone es"}
          link="/heha"
      />
      <Card 
          img="https://live.staticflickr.com/4827/45330425754_112571cca4_b.jpg"
          title="Nile Source - Rutovu"
           
          shortdesc={""}
          link="/nilesource"
      />
      <Card 
          img="https://i.pinimg.com/originals/ab/35/b2/ab35b253ac309e29dafaa7388af37202.jpg"
          title="Rumonge Natural Reserve"
           
          shortdesc={""}
          link="/rumonge"
      />
      <Card 
          img="https://pbs.twimg.com/media/FabmRC5XgAAyPEV.jpg"
          title="Kibira National Park"
           
          shortdesc={""}
          link="/kibira"
      />
      <Card 
          img="https://www.oldsite.transnational.org/SAJT/bilder2/burundipics/gitega_museum_3.jpg"
          title="Sunstone Beach - Rumonge"
           
          shortdesc={""}
          link="/sunstone"
      />
      <Card 
          img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d2/0e/05/caption.jpg?w=300&h=300&s=1"
          title="Ruvubu National Park"
          price="$12"
          shortdesc={"Gishora Drum Sanctuary is a mesmerizing cultural haven nestled in the heart of Burundi."}
          link="/ruvubu"
      />
         <Card 
          img="https://travel2unlimited.com/wp-content/uploads/2015/02/5-12.jpg"
          title="Nightlife of Bujumbura"
          price="$5"
          shortdesc={"Zoo, Like everyone es"}
          link="/nightlife"
      />

        <Card 
          img="https://travel2unlimited.com/wp-content/uploads/2015/02/5-12.jpg"
          title="Rusizi National Park"
          price="$5"
          shortdesc={"Zoo, Like everyone es"}
          link="/rusizi"
      />
        <Card 
          img="https://travel2unlimited.com/wp-content/uploads/2015/02/5-12.jpg"
          title=" Pierre Stanley-Livingstone"
          price="$5"
          shortdesc={"Zoo, Like everyone es"}
          link="/stanley"
      />
        </div>
        
        <Popular1 />
        
        </div>
        </>
    )
}

export default Destinations;