// src/routes/AppRoutes.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from '../pages/Auth';
import Register from '../pages/Home';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Auth />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
