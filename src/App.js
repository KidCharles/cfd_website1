import React from 'react';
import "./reset.css";
import './App.css';

// import { Router, Route, Switch } from "react-router-dom";

import Nav from "./Components/Nav/Nav"
// import Banner from "./Components/Banner/Banner"
import Landing from "./Components/Landing/Landing"
import Disclaimer from "./Components/Disclaimer/Disclaimer"
import Footer from "./Components/Footer/Footer"


function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      {/* <Banner /> */}
      <Disclaimer />
      <Footer />
    </div>
  );
}

export default App;
