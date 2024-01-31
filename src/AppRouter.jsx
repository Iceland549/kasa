// AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import LocationPage from './pages/LocPage';
import Error404 from './pages/Error404';

function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/About" element={<Layout><About/></Layout>} />
            <Route path="/LocPage/:id" element={<Layout><LocationPage /></Layout>} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    </Router>
  );
};

export default AppRouter;
