import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import Destinations from './destinations';
import Place from './place';
import Guides from './guides';
import Card from './card';

const Rout = () => {
    const placesData = [
        { id: 1, title: 'Gishora Drum Sanctuary', img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d2/0e/05/caption.jpg?w=300&h=300&s=1', shortdesc: '', price: '$20' },
        { id: 1, title: 'Gishora Drum Sanctuary', img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d2/0e/05/caption.jpg?w=300&h=300&s=1', shortdesc: '', price: '$20' },
        { id: 1, title: 'Gishora Drum Sanctuary', img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d2/0e/05/caption.jpg?w=300&h=300&s=1', shortdesc: '', price: '$20' },
        { id: 1, title: 'Gishora Drum Sanctuary', img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d2/0e/05/caption.jpg?w=300&h=300&s=1', shortdesc: '', price: '$20' },
        { id: 1, title: 'Gishora Drum Sanctuary', img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d2/0e/05/caption.jpg?w=300&h=300&s=1', shortdesc: '', price: '$20' },
        { id: 1, title: 'Gishora Drum Sanctuary', img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d2/0e/05/caption.jpg?w=300&h=300&s=1', shortdesc: '', price: '$20' },
    ];
    return (
        <>
        <Routes>
        <Route path='/' element={<Home />} />   
        <Route path='/home' element={<Home />} />
        <Route path='/destinations' element={<Destinations />} />
        <Route path='/place' element={<Place />} />
        <Route path='/guides' element={<Guides />} />
        
        </Routes>
        </>
    )

}

export default Rout;