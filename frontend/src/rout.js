import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import Destinations from './destinations';
import Gishora from './places/gishora';
import Gasumo from './places/gasumo';
import Heha from './places/heha';
import Karera from './places/karera';
import Kibira from './places/kibira';
import Nationale from './places/museenationale';
import Vivant from './places/museevivant';
import Night from './places/nightlife';
import Nile from './places/nilesource';
import Rumonge from './places/rumonge';
import Rusizi from './places/rusizi';
import Ruvubu from './places/ruvubu';
import Sagaplage from './places/sagaplage';
import Stanley from './places/stanley';
import Sunstone from './places/sunstone';
import Teza from './places/teza';


const Rout = () => {
    return (
        <>
        <Routes>
        <Route path='/' element={<Home />} />   
        <Route path='/home' element={<Home />} />
        <Route path='/destinations' element={<Destinations />} />
        <Route path='/gishora' element={<Gishora />} />
        <Route path='/heha' element={<Heha />} />
        <Route path='/gasumo' element={<Gasumo />} />
        <Route path='/karera' element={<Karera />} />
        <Route path='/kibira' element={<Kibira />} />
        <Route path='/museenationale' element={<Nationale />} />
        <Route path='/museevivant' element={<Vivant />} />
        <Route path='/night' element={<Night />} />
        <Route path='/nile' element={<Nile />} />
        <Route path='/rumonge' element={<Rumonge />} />
        <Route path='/rusizi' element={<Rusizi />} />
        <Route path='/ruvubu' element={<Ruvubu />} />
        <Route path='/sagaplage' element={<Sagaplage />} />
        <Route path='/stanley' element={<Stanley />} />
        <Route path='/sunstone' element={<Sunstone />} />
        <Route path='/teza' element={<Teza />} />
        
        </Routes>
        </>
    )

}

export default Rout;