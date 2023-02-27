import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Heater from "./components/heater/Heater";
import HomePage from "./Home/HomePage";
import Footer from "./components/footer/Footer";
import SinglePage from "./Home/watch/SinglePage";

function App() {
  return(
    <>
        <Router>
          <Heater />
          <Routes>
              <Route path="/" element={<HomePage />} />  
              <Route path="/singlePage:id" element={<SinglePage />} />  
          </Routes>
          <Footer />
        </Router> 
    </>
  ) 
}

export default App;
