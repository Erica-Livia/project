import { Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

export default function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Register />} /> 
      <Route path="/login" element={<Login />} />
    </Routes>
  );

}