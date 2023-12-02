import React from "react";
import './place.css';
import Card from "../card";
import Popular from "../popular";
import { Link } from "react-router-dom";

const Teza = () => {
    return (
        <>
        <div className="place-description">
          <div className="place">
            <div className="text-wrapper-3"><Link to='/destinations' className="link">Destinations</Link> - Teza Tea Plantation: Exploration</div>
          </div>
          <div className="images">
          <img className="sgp"  src="https://burunditourism.files.wordpress.com/2014/03/teza-tea-burundi-910x608.jpg" />
          <img className="sgp1" alt="" src="https://pbs.twimg.com/media/CS9yPG8UkAAomI3.jpg"/>
          <img className="sgp2" alt="" src="https://i2.wp.com/ngaaliinflightmag.com/wp-content/uploads/2020/07/Picture-by-The-world-List-of-Tourist-Attractions.jpg?fit=512%2C341&ssl=1" />
          </div>
          <div className="location"><p><strong>Region: Teza - Bubanza</strong></p></div>
          <div className="summary">
            <p>
            Planning to visit Burundi soon? You can’t miss the Agro-tourism experience in Teza Tea Plantations
Burundi is well-known to produce some of Africa’s most flavorsome tea, and nowhere else does tea growing excel better than Teza, among the valleys of mountains and thermal springs.
<br></br>The tea plantations of Teza exhibits some of the most beautiful landscape in all of Burundi.
Teza, a hidden gem located on the edge of Kibira forest, sits at an altitude of 4500-7000ft above sea level, and has been growing tea since it was introduced into the hilly country during Belgian occupation in 1931.
<br></br>Here, you will have an informative experience on what happens behind the scenes of tea growing during a half day tour.

The greenery of the estate is relaxing and tranquil, and the air bears acountryside freshness. The plantations are divided into patterns to allow the workers to collect the tea leaves after harvest. Looking this scenic setting from a distance, you are bound to think it is a green carpet spread over rolling hills.
You will have stopovers to take pictures or better still, join farmers harvesting as you learn more about their cultures.
It is fun seeing how quickly the locals use both their hands to pluck the leaves from the tea plants—before stuffing them in their harvest baskets. <br></br>They are very welcoming and will lend you their big hats and harvesting basket as you get a first-hand experience of traditional harvest.
<br></br>The tour is a farm to cup experience that ends with sampling the different classes of tea as you enjoy cool weather at homes of local farmers. Whether you are a big fan of black tea or not, you will love this experience as the tea has a unique taste from any you have ever tasted. 
Best of all, the area produces enough tea for the international market. As such, you can take some home to enjoy for a while.

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

export default Teza;