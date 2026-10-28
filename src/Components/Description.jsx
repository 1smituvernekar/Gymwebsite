import React from "react";
import "./Description.css";

const Description = () => {
  const features = [
    {
      icon: "🏋️",
      title: "Modern Equipment",
      text: "Train with quality equipment for strength, cardio, and functional fitness.",
    },
    {
      icon: "💪",
      title: "Expert Trainers",
      text: "Get guidance and personalized workout plans from experienced coaches.",
    },
    {
      icon: "⚡",
      title: "Flexible Programs",
      text: "Choose a fitness routine that matches your goals and your schedule.",
    },
    {
      icon: "❤️",
      title: "Supportive Community",
      text: "Stay motivated with friendly members and a positive training environment.",
    },
  ];

  return (
    <section className="gym-about" id="about">
      <div className="gym-about-heading">
        <p className="gym-section-tag">ABOUT FITZONE</p>
        <h2>
          MORE THAN JUST <span>A GYM</span>
        </h2>
        <p>
          Fitness is not only about lifting weights. It is about building
          confidence, creating healthy habits, and becoming stronger every
          day. We help you turn your fitness goals into a lifestyle.
        </p>

        <a href="#contact" className="gym-about-btn">
          Start Your Journey →
        </a>
      </div>

      <div className="gym-about-gallery">
        <img
          className="gym-about-main-img"
          src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=900&q=80"
          alt="Athlete training in the gym"
          loading="lazy"
        />

        <img
          className="gym-about-small-img"
          src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=80"
          alt="Strength training with dumbbells"
          loading="lazy"
        />
      </div>

      <div className="gym-about-features" id="programs">
        {features.map((feature) => (
          <div className="gym-feature" key={feature.title}>
            <div className="gym-feature-icon">{feature.icon}</div>
            <div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Description;