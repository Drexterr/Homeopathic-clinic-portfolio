import React from 'react';
import Navbar from './components/Navbar';
import Home from './Home';
import Services from './components/Services';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
      <div className="text-center">
        © 2024 Shree Sheetalnath Homeo Clinic. All Rights Reserved.
      </div>
    </BrowserRouter>
  );
}

export default App;