import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const reviews = [
    {
      name: "Pooja meharwade",
      result: "Member for 8 months",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      review:
        "The trainers are supportive, the environment is amazing, and I feel much more confident and energetic.",
    },
    {
      name: "Rahul Mehta",
      result: "Member for 6 months",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      review:
        "I finally found a workout routine I enjoy. The coaches help me stay consistent and work toward my goals.",
    },
    {
      name: "Sneha patel",
      result: "Member for 1 year",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80",
      review:
        "Clean facilities, great equipment, and a friendly community. Every workout feels like progress.",
    },
  ];

  return (
    <section className="gym-testimonials" id="testimonials">
      <div className="gym-testimonial-heading">
        <p className="gym-section-tag">REAL PEOPLE. REAL PROGRESS.</p>
        <h2>
          WHAT OUR MEMBERS <span>SAY</span>
        </h2>
        <p>Discover what makes our fitness community special.</p>
      </div>

      <div className="gym-review-grid">
        {reviews.map((review) => (
          <article className="gym-review-card" key={review.name}>
            <div className="gym-review-stars" aria-label="5 out of 5 stars">
              ★★★★★
            </div>

            <p className="gym-review-text">"{review.review}"</p>

            <div className="gym-review-person">
              <img src={review.image} alt={review.name} loading="lazy" />
              <div>
                <h3>{review.name}</h3>
                <p>{review.result}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;