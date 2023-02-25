import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Heater from "./components/heater/Heater";
import HomePage from "./Home/HomePage";

function App() {
  return(
    <>
        <Router>
          <Heater />
          <Routes>
              <Route path="/" element={<HomePage />} />  
          </Routes>  
        </Router> 
    </>
  ) 
}

export default App;
