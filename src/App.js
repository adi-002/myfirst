import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Contact from "./Contact";
import Home from './Home';
import About from './About';
import Service from './Service';
import Navbar from './Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Footer from "./Footer"

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/service' component={Service} />
        <Route exact path='/contact' component={Contact} />
        <Redirect to='/' />
      </Switch>
      <Footer />

    </>
  );
}

export default App;
