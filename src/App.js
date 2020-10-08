import React from 'react';
import './App.css';
import Header from "./Components/header/header.js";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Footer from "./Components/footer/footer";
import Button from "./Components/Button/button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function app() {
  return (
    <Router>
      <div className="Home">
        <Header />
        <Route path="/about" component={About} />

        <Switch>
          <Route path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>
        </Switch>

        <Button />
        <footer />

      </div>
    </Router>
  );
}
