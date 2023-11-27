import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Destinations from './destinations';
import Place from './place';

const Rout = () => {
    return (
        <>
        <Routes>
        <Route path='/' element={<Home />} />   
            <Route path='/home' element={<Home />} />
            <Route path='/destinations' element={<Destinations />} />
            <Route path='/place' element={<Place />} />
        </Routes>
        </>
    )
}

export default Rout;