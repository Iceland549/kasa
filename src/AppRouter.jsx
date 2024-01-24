// AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import LocationPage1 from './pages/LocPage1';
import LocationPage2 from './pages/LocPage2';
import LocationPage3 from './pages/LocPage3';
import LocationPage4 from './pages/LocPage4';
import LocationPage5 from './pages/LocPage5';
import LocationPage6 from './pages/LocPage6';
import Error404 from './pages/Error404';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/LocPage1" element={<LocationPage1 />} />
        <Route path="/LocPage2" element={<LocationPage2 />} />
        <Route path="/LocPage3" element={<LocationPage3 />} />
        <Route path="/LocPage4" element={<LocationPage4 />} />
        <Route path="/LocPage5" element={<LocationPage5 />} />
        <Route path="/LocPage6" element={<LocationPage6 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
