import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "Strength Training",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setSuccess("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Gym inquiry:", formData);

    setSuccess(
      "Thanks for contacting FitZone! Your demo form was submitted."
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      program: "Strength Training",
      message: "",
    });
  };

  return (
    <section className="gym-contact" id="contact">
      <div className="gym-contact-info">
        <p className="gym-section-tag">GET IN TOUCH</p>

        <h2>
          YOUR NEXT CHAPTER
          <br />
          <span>STARTS HERE.</span>
        </h2>

        <p className="gym-contact-description">
          Have questions about memberships or training? Tell us what
          you want to achieve and let's find the right program for you.
        </p>

        <div className="gym-contact-detail">
          <span>☎</span>
          <div>
            <h3>Call Us</h3>
            <p>+91 98765 43210</p>
          </div>
        </div>

        <div className="gym-contact-detail">
          <span>✉</span>
          <div>
            <h3>Email Us</h3>
            <p>hello@fitzone.com</p>
          </div>
        </div>

        <div className="gym-contact-detail">
          <span>⌖</span>
          <div>
            <h3>Visit Us</h3>
            <p>Your Street, Your City, India</p>
          </div>
        </div>
      </div>

      <form className="gym-contact-form" onSubmit={handleSubmit}>
        <h3>LET'S TALK FITNESS</h3>
        <p>Fill in your details and we'll help you get started.</p>

        <label htmlFor="gym-name">Full Name</label>
        <input
          id="gym-name"
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="gym-email">Email Address</label>
        <input
          id="gym-email"
          type="email"
          name="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="gym-phone">Phone Number</label>
        <input
          id="gym-phone"
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
          pattern="[0-9+() -]{7,20}"
        />

        <label htmlFor="gym-program">Interested In</label>
        <select
          id="gym-program"
          name="program"
          value={formData.program}
          onChange={handleChange}
        >
          <option>Strength Training</option>
          <option>Weight Loss</option>
          <option>Personal Training</option>
          <option>Cardio Fitness</option>
          <option>General Membership</option>
        </select>

        <label htmlFor="gym-message">Your Fitness Goals</label>
        <textarea
          id="gym-message"
          name="message"
          rows="4"
          placeholder="Tell us what you want to achieve..."
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">
          Send Inquiry <span>→</span>
        </button>

        {success && (
          <p className="gym-form-success" role="status">
            {success}
          </p>
        )}
      </form>
    </section>
  );
};

export default Form;