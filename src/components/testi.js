import React from "react";
import "./testi.css"; 

const TestimonialCardSection = (props) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <svg
          className="testimonial-quote-icon"
          viewBox="0 0 24 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z"
            fill="currentColor"
          ></path>
        </svg>
        <p className="testimonial-text">
          {props.review}
        </p>
      </div>
      <div className="testimonial-footer">
        <div className="testimonial-details">
          <p className="testimonial-name">{props.name}</p>
          <p className="testimonial-username">{props.mail}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCardSection;
