// AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import LocationPage1 from './pages/LocationPage1';
import LocationPage2 from './pages/LocationPage2';
import LocationPage3 from './pages/LocationPage3';
import LocationPage4 from './pages/LocationPage4';
import LocationPage5 from './pages/LocationPage5';
import LocationPage6 from './pages/LocationPage6';
import Error404 from './pages/Error404';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/location/page1" exact component={LocationPage1} />
        {/* Ajoutez les autres routes ici */}
        <Route path="/location/page2" exact component={LocationPage2} />
        <Route path="/location/page3" exact component={LocationPage3} />
        <Route path="/location/page4" exact component={LocationPage4} />
        <Route path="/location/page5" exact component={LocationPage5} />
        <Route path="/location/page6" exact component={LocationPage6} />
        <Route component={Error404} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
