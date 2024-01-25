// AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import LocationPage1 from './pages/LocPage1';
import LocationPage2 from './pages/LocPage2';
import LocationPage3 from './pages/LocPage3';
import LocationPage4 from './pages/LocPage4';
import LocationPage5 from './pages/LocPage5';
import LocationPage6 from './pages/LocPage6';
import Error404 from './pages/Error404';

function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/About" element={<Layout><About/></Layout>} />
            <Route path="/LocPage1" element={<Layout><LocationPage1 /></Layout>} />
            <Route path="/LocPage2" element={<Layout><LocationPage2 /></Layout>} />
            <Route path="/LocPage3" element={<Layout><LocationPage3 /></Layout>} />
            <Route path="/LocPage4" element={<Layout><LocationPage4 /></Layout>} />
            <Route path="/LocPage5" element={<Layout><LocationPage5 /></Layout>} />
            <Route path="/LocPage6" element={<Layout><LocationPage6 /></Layout>} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    </Router>
  );
};

export default AppRouter;
