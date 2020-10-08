import React from 'react';
import './App.css';
import Header from "./Components/header/header.js";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function app() {
  return (

    <Router>
      <div className="Home">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
