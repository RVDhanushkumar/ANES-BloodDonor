import React, { useEffect, useRef } from "react";
import "./wdb.css";

const Whydonate = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="wdb_main">
      <div className="wdb_heading">
        <h2>🩸 Why Donate Blood?</h2>
        <p>One donation can save up to three lives! Be a hero today.</p>
      </div>
      <div className="wdb_left">
        <div className="infocards">
          {[
            { title: "✅ Saves Lives", text: "💖 Your donation can help accident victims, surgeries, cancer patients, and more." },
            { title: "💪 Keeps You Healthy", text: "🩸 Regular donation stimulates new blood cell production and improves circulation" },
            { title: "🤝 Supports Your Community", text: "🌍 Hospitals and blood banks always need supply. Your contribution makes a difference." },
            { title: "🎖 Earn Rewards & Recognition", text: "🏅 Some organizations offer donor appreciation, health check-ups, and certificates." }
          ].map((item, index) => (
            <div
              key={index}
              className="card"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whydonate;
