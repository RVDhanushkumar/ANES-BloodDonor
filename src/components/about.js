import React from "react";
import { motion } from "framer-motion";
import "./about.css";
import dhanush from "../assets/me1.jpg";
import lalith from "../assets/lalith.jpg"
import chandu from "../assets/chandu .jpg";
import vishnu from "../assets/vishnu.jpg";
import sharmi from "../assets/sharmi1.jpg";

const teamMembers = [
  { name: "PV Vishnu Vardhan", role: "Backend Developer", image: vishnu },
  { name: "R V Dhanush Kumar", role: "Frontend-Developer", image: dhanush },
  { name: "Tatikonda Sharmila", role: "UI/UX designer", image: sharmi },
  { name: "Allu Lalith Kumar", role: "Ex-Intern", image: lalith },
  { name: "Karri Chandra Sekhar", role: "Intern", image: chandu },
  { name: "D Navaneeth", role: "Intern", image: chandu },
];

const Avatar = ({ src, alt }) => (
  <img className="avatar" src={src} alt={alt} />
);

const Card = ({ children }) => (
  <div className="card">{children}</div>
);

const CardContent = ({ children }) => <div className="card-content">{children}</div>;

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <motion.h1 
        className="about-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        About Us
      </motion.h1>
      
      <motion.p 
        className="about-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Welcome to the ANES Blood Donation Initiative. Our mission is to bridge the gap between blood donors and those in need, creating an efficient and user-friendly platform to save lives. We believe in the power of technology to make blood donation accessible, reliable, and hassle-free. Our initiative is built on the principles of compassion, connectivity, and community service. 
      </motion.p>
      
      <motion.p 
        className="about-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Through our platform, we aim to facilitate easy donor registration, real-time blood requests, and instant notifications to potential donors. We strive to make sure that no one suffers due to a lack of blood availability. Our dedicated team works tirelessly to ensure a seamless experience for both donors and recipients. Join us in this noble cause and help save lives.
      </motion.p>
      
      <motion.h2 
        className="team-title"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Meet Our Developers
      </motion.h2>
      
      <div style={{display:"flex",placeContent:"center"}}>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="team-member"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card>
              <Avatar src={member.image} alt={member.name} />
              <CardContent>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      </div>
      
      <motion.div 
        className="contact-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-info">📍 ANITS, Sangivalasa, Andhra Pradesh, India</p>
        <p className="contact-info">📧 Email: rapetidhanushkumar13@gmail.com</p>
        <p className="contact-info">📞 Phone: +91 93815 15961</p>
        <p className="contact-info">🌐 Website: www.anesblooddonation.com</p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
