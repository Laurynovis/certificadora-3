import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from '../pages/login/Auth';
import Register from '../pages/home/Home';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/home" element={<Register />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
