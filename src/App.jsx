import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Description from "./Components/Description";
import Testimonials from "./Components/Testimonials";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="gym-app">
      <Navbar />

      <main>
        <Hero />
        <Description />
        <Testimonials />
        <Form />
      </main>

      <Footer />
    </div>
  );
};

export default App;