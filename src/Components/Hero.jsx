import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="gym-hero" id="home">
      <div className="gym-hero-content">
        <p className="gym-eyebrow">
          STRONGER <span>•</span> HEALTHIER <span>•</span> HAPPIER
        </p>

        <h1>
          YOUR FITNESS
          <br />
          JOURNEY <span>STARTS HERE</span>
        </h1>

        <p className="gym-hero-text">
          Build strength, improve your stamina, and become the best
          version of yourself. Train with expert coaches, modern
          equipment, and a community that keeps you motivated.
        </p>

        <div className="gym-hero-buttons">
          <a href="#contact" className="gym-btn-primary">
            Join Now <span>→</span>
          </a>

          <a href="#programs" className="gym-btn-outline">
            Explore Programs
          </a>
        </div>

        <div className="gym-stats">
          <div>
            <h3>500+</h3>
            <p>Happy Members</p>
          </div>

          <div>
            <h3>10+</h3>
            <p>Expert Trainers</p>
          </div>

          <div>
            <h3>4.9★</h3>
            <p>Member Rating</p>
          </div>
        </div>
      </div>

      <div className="gym-hero-image">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85"
          alt="Modern gym with professional fitness equipment"
        />

        <div className="gym-image-badge">
          <span>✦</span>
          <p>NO EXCUSES.</p>
          <strong>JUST RESULTS.</strong>
        </div>
      </div>
    </section>
  );
};

export default Hero;