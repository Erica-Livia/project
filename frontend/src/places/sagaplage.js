import React from "react";
import './place.css';
import Card from "../card";
import Popular from "../popular";
import { Link } from "react-router-dom";

const Sagaplage = () => {
    return (
        <>
        <div className="place-description">
          <div className="place">
            <div className="text-wrapper-3"><Link to='/destinations' className="link">Destinations</Link> - Saga Plage: Lake Tanganyika</div>
          </div>
          <div className="images">
          <img className="sgp"  src="https://live.staticflickr.com/4827/45330425754_112571cca4_b.jpg" />
          <img className="sgp2" alt="" src="https://ik.imagekit.io/ytnisb6gp/wp-content/uploads/2007/08/01-Saga-beach-2007.jpg" />
          <img className="sgp1" alt="" src="https://www.kwafrikatravel.com/wp-content/uploads/2022/10/Beach-scaled.jpg"/>
          
          </div>
          <div className="location"><p><strong>Region: Kajaga - Bujumbura</strong></p></div>
          <div className="summary">
            <p>
            Bujumbura’s Lake Tanganyika beaches are some of the best urban beaches of any landlocked country in Africa.<br></br> The sand, though not exactly pristine white and clean, 
            is still an inviting place to drop a towel, the swimming is safe and the water warm.<br></br>

            The stretch of beach that lies about 5km northwest of the capital is the most beautiful and used to be known as Plage des Cocotiers (Coconut Beach). <br></br>
            However, a number of resorts are located along the road and most locals now call it Saga Plage (pronounced Sagga), in honour of what was once the most popular restaurant and bar here. It's at its liveliest best at the weekend.<br></br>

            From all the seaside bathing establishments, Saga Beach led by Bosco (which also manages Saga Nyanza-Lac) is one of the largest and most festive, and we eat very well. Several spaces are designed for drinking or eating, near the bar under the barza (Hornbills), <br></br>
            a little further on a metal terrace in the form of a boat planted on the lake (Okapi) or under straw roofs here and there. On weekends, the place is very lively and des offer demonstrations on Sunday. <br></br>
            They are sometimes joined by ikembe players. Possible water sports (surfing and navigation).
            </p>
          </div>
          <div className="like">
          <p>You might also like...</p>
            <div className="frame-5">
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

        </div>
      
      </div>
      
       
    </div>
        </>
    )}

export default Sagaplage;