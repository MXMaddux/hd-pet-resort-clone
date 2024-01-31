import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Activities from "./components/Activities";
import Reviews from "./components/Reviews";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Services from "./components/Services";
import Maps from "./components/Maps";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Hero />
      <Welcome />
      <Services />
      <Maps />
      <Activities />
      <Reviews />
      <Footer />
    </Router>
  );
}

export default App;
