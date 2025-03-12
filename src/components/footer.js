import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>ANES</h2>
          <p>Saving Lives, One Donation at a Time.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/register">Donate Blood</Link></li>
            <li><Link to="/getallData">Request Blood</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/hall-of-fame">Hall of Fame</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:rapetidhanushkumar13@gmail.com">rapetidhanushkumar13@gmail.com</a></p>
          <p>Phone: <a href="tel:+919381515962">+91 98151 5961</a></p>
          <p>Address: ANITS, Visakhapatnam, AP</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Join us in creating a <strong>life-saving community</strong>. Your <strong>blood donation</strong> can make a difference! 
        Find a <strong>blood bank</strong>, request <strong>emergency blood</strong>, or <strong>volunteer</strong> today.</p>
        <p>© {new Date().getFullYear()} ANES Blood Donation | All Rights Reserved.</p>
      </div>
    </footer>
  );
}
