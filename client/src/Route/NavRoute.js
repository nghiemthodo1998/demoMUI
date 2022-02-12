import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../Components/Home';
import Blog from '../Components/Blog';
import Products from '../Components/Products';

const NavRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
};

export default NavRoute;
