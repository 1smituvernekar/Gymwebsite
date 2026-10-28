import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="gym-footer">
      <div className="gym-footer-main">
        <div className="gym-footer-brand">
          <a href="#home" className="gym-footer-logo">
            ✦ Fit<span>Zone</span>
          </a>

          <p>
            Stronger bodies. Healthier minds.
            <br />
            Better lives, one workout at a time.
          </p>
        </div>

        <div className="gym-footer-column">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#programs">Programs</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="gym-footer-column">
          <h3>Our Programs</h3>
          <a href="#programs">Strength Training</a>
          <a href="#programs">Weight Loss</a>
          <a href="#programs">Cardio Fitness</a>
          <a href="#programs">Personal Training</a>
        </div>

        <div className="gym-footer-column gym-footer-contact">
          <h3>Contact Us</h3>
          <p>☎ +91 98765 43210</p>
          <p>✉ hello@fitzone.com</p>
          <p>⌖ Your City, India</p>
        </div>
      </div>

      <div className="gym-footer-bottom">
        <p>© {new Date().getFullYear()} FitZone. All rights reserved.</p>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
};

export default Footer;