import React from 'react';
import "./reset.css";
import './App.css';

import Nav from "./Components/Nav/Nav"
import Landing from "./Components/Landing/Landing"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
