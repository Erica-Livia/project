import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Card from './card';
import Place from './place';

const Ok = () => {
    const placesData = [
        { id: 1, title: 'Gishora Drum Sanctuary', img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d2/0e/05/caption.jpg?w=300&h=300&s=1', shortdesc: '', price: '$20' },
        { id: 1, title: 'Gishora Drum Sanctuary', img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d2/0e/05/caption.jpg?w=300&h=300&s=1', shortdesc: '', price: '$20' },
        { id: 1, title: 'Gishora Drum Sanctuary', img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d2/0e/05/caption.jpg?w=300&h=300&s=1', shortdesc: '', price: '$20' },
        { id: 1, title: 'Gishora Drum Sanctuary', img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d2/0e/05/caption.jpg?w=300&h=300&s=1', shortdesc: '', price: '$20' },
        { id: 1, title: 'Gishora Drum Sanctuary', img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d2/0e/05/caption.jpg?w=300&h=300&s=1', shortdesc: '', price: '$20' },
        { id: 1, title: 'Gishora Drum Sanctuary', img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d2/0e/05/caption.jpg?w=300&h=300&s=1', shortdesc: '', price: '$20' },
    ];

    return(
        <Router>
            <div>
                {/* Map through your places data and create a Card for each */}
                {placesData.map((place) => (
                    <Link key={place.id} to={`/place/${place.id}`}>
                        <Card {...place} />
                    </Link>
                ))}

                {/* Route for displaying place details */}
                {placesData.map((place) => (
                    <Route key={place.id} path={`/place/${place.id}`}>
                        <Place {...place} />
                    </Route>
                ))}
            </div>
        </Router>
    );
};

export default Ok;