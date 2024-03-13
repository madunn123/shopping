import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Test from './Test';
import Pagination from './Pagination';

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/pagination" element={<Pagination />} />
      </Routes>
    </BrowserRouter>
  );
}
