import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from './Nav';
import Homepage from './Homepage';
import Gallery from './Gallery'
import Menu from './Menu';
import Info from './Info';
import Footbar from './Footbar';
// import ScrollToTop from './ScrollToTop';




function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route path='/Gallery'>
          <Gallery />
        </Route>
        <Route path='/Menu'>
          <Menu />
        </Route>
        <Route path='/Info'>
          <Info />
        </Route>
      </Switch>
      <Footbar />
    </Router>
  );
}

export default App;