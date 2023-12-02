import './destination.css';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from './card';
import { Link, useHistory } from 'react-router-dom';

const Destination = () => {
  const [ setSearchInput] = useState("");
  const location = useLocation();
  const searchInput = new URLSearchParams(location.search).get('search');


  const places = [
        <Card 
          img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d2/0e/05/caption.jpg?w=300&h=300&s=1"
          title="Gishora Drum Sanctuary"
         
          shortdesc={"Gishora Drum Sanctuary is a mesmerizing cultural haven nestled in the heart of Burundi."}
          link="/gishora"
          region="Gitega"
          country="Burundi"
          category="Culture"
          
        />,
        <Card 
            img="https://travel2unlimited.com/wp-content/uploads/2015/02/5-12.jpg"
            title="Musée Vivant"
            
            shortdesc={"Zoo, Like everyone es"}
            link="/museevivant"
            region="Bujumbura"
          country="Burundi"
          category="Culture"
        />,
        <Card 
          img="https://live.staticflickr.com/4827/45330425754_112571cca4_b.jpg"
          title="Lake Tanganyika - Saga Plage"
          
          shortdesc={""}
          link="/sagaplage"
          region="Bujumbura"
          country="Burundi"
          category="Culture"
      />,
      <Card 
          img="https://i.pinimg.com/originals/ab/35/b2/ab35b253ac309e29dafaa7388af37202.jpg"
          title="Teza Tea Plantation"
           
          shortdesc={""}
          link="/teza"
          region="Muramvya"
          country="Burundi"
          category="Culture"
      />,
      <Card 
          img="https://pbs.twimg.com/media/FabmRC5XgAAyPEV.jpg"
          title="Karera Waterfalls"
           
          shortdesc={""}
          link="/karera"
          region="Rutana"
          country="Burundi"
          category="Culture"
      />,
      <Card 
          img="https://www.oldsite.transnational.org/SAJT/bilder2/burundipics/gitega_museum_3.jpg"
          title="Gitega's National Museum"
           
          shortdesc={""}
          link="/museenationale"
          region="Gitega"
          country="Burundi"
          category="Culture"
      />,
      <Card 
          img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d2/0e/05/caption.jpg?w=300&h=300&s=1"
          title="Gasumo Waterfalls"
          price="$12"
          shortdesc={"Gishora Drum Sanctuary is a mesmerizing cultural haven nestled in the heart of Burundi."}
          link="/gasumo"
          region="Mwaro"
          country="Burundi"
      />,
         <Card 
          img="https://travel2unlimited.com/wp-content/uploads/2015/02/5-12.jpg"
          title="Hiking - Mount Heha"
          price="$5"
          shortdesc={"Zoo, Like everyone es"}
          link="/heha"
          region="Bujumbura Rural"
          country="Burundi"
      />,
      <Card 
          img="https://live.staticflickr.com/4827/45330425754_112571cca4_b.jpg"
          title="Nile Source - Rutovu"
           
          shortdesc={""}
          link="/nilesource"
          region="Bururi"
          country="Burundi"
      />,
      <Card 
          img="https://i.pinimg.com/originals/ab/35/b2/ab35b253ac309e29dafaa7388af37202.jpg"
          title="Rumonge Natural Reserve"
           
          shortdesc={""}
          link="/rumonge"
          region="Rumonge"
          country="Burundi"
      />,
      <Card 
          img="https://pbs.twimg.com/media/FabmRC5XgAAyPEV.jpg"
          title="Kibira National Park"
           
          shortdesc={""}
          link="/kibira"
          region="Bujumbura"
          country="Burundi"
      />,
      <Card 
          img="https://www.oldsite.transnational.org/SAJT/bilder2/burundipics/gitega_museum_3.jpg"
          title="Sunstone Beach - Rumonge"
           
          shortdesc={""}
          link="/sunstone"
          region="Rumonge"
          country="Burundi"
      />,
      <Card 
          img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d2/0e/05/caption.jpg?w=300&h=300&s=1"
          title="Ruvubu National Park"
          price="$12"
          shortdesc={"Gishora Drum Sanctuary is a mesmerizing cultural haven nestled in the heart of Burundi."}
          link="/ruvubu"
          region="Karuzi"
          country="Burundi"
      />,
         <Card 
          img="https://travel2unlimited.com/wp-content/uploads/2015/02/5-12.jpg"
          title="Nightlife of Bujumbura"
          price="$5"
          shortdesc={"Zoo, Like everyone es"}
          link="/nightlife"
          region="Bujumbura"
          country="Burundi"
      />,

        <Card 
          img="https://travel2unlimited.com/wp-content/uploads/2015/02/5-12.jpg"
          title="Rusizi National Park"
          price="$5"
          shortdesc={"Zoo, Like everyone es"}
          link="/rusizi"
          region="Bujumbura"
          country="Burundi"
      />,
        <Card 
          img="https://travel2unlimited.com/wp-content/uploads/2015/02/5-12.jpg"
          title=" Pierre Stanley-Livingstone"
          price="$5"
          shortdesc={"Zoo, Like everyone es"}
          link="/stanley"
          region="Bujumbura"
          country="Burundi"
      />
        
        
    ];
    
    const handleChange = (e) => {
      setSearchInput(e.target.value);
    };
    const filteredPlaces = places.filter((place) => {
      const lowerSearchInput = searchInput.toLowerCase();
      const concatenatedText = `${place.props.title} ${place.props.region} ${place.props.shortdesc} ${place.props.country} ${place.props.category}`.toLowerCase();
    
      return concatenatedText.includes(lowerSearchInput);
      // Add more properties as needed to the concatenated string
    });
    return (
        <>
          <h3 style={{padding: "20px 170px"}}>Search Results for: {searchInput}</h3>
          <h4 style={{padding: "20px 170px", textDecoration:"none", color:"black"}}><Link style={{color:"black"}} to='/home'>Return To Home Page</Link></h4>
          <div className="card-container">
          {filteredPlaces.map((place, index) => (
          <Link key={index} to='/destination' style={{textDecoration:"none", color:"black"}}>
            <div className="card-wrapper" style={{padding:"20px 0px;"}}>
              {place}
          </div></Link>
         
        ))}
        </div>
        </>
      );
    };
    
    export default Destination;