import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Home from "./components/home/Home";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />     
          <Route exact path="/landing" element={<Landing />} />   
        </Routes>
      </Router>
    </div>
  );
}

export default App;