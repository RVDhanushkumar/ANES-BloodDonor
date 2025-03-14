import React from 'react';
import "./home.css";
import pic1 from "../assets/bg.png";
import Whydonate from './whydonate';
import Certi from './certi';
import TestimonialFullWidth from './testi';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home_main'>
      {/* Hero Section */}
      <div className='home'>
        <div className='left'>
          <div className='text'>
            <h1>ANES Blood Donor - <span style={{color:"rgba(92, 203, 222)"}}>Find & Donate Blood, Save Lives</span></h1>
            <p>
              Every drop counts, Join our mission to make a life-saving impact. 
              Donate blood today and be the reason someone gets a second chance at life. ❤️
            </p>
            <Link to="/register">
              <button className='donate-btn'>Donate Now</button>
            </Link>
          </div>
        </div>
        
        {/* Image Section */}
        <div className='pic'>
          <div className='right'>
            <div className='extra'></div>
            <img src={pic1} loading='lazy' alt='Blood Donation Campaign' />
          </div>
        </div>
      </div>

      {/* Why Donate Section */}
      <Whydonate />
      
      {/* Certification Section */}
      <Certi />

      {/* Testimonials Section */}
      <div className='tes'>
        <h2>What Our Donors Say</h2>
        <div className='testi'>
          <TestimonialFullWidth 
            name="Ananya" 
            review="This platform is truly a lifesaver! I found a donor within minutes and received the help I desperately needed. It connects real heroes with those in need." 
            mail="annanya13@gmail.com"
          />
          <TestimonialFullWidth 
            name="Rahul M." 
            review="Donating blood has never been easier. This site makes the process seamless, and knowing I helped someone in need is the best feeling." 
            mail="rahul14@gmail.com"
          />
          <TestimonialFullWidth 
            name="Vikram S." 
            review="Quick, reliable, and impactful. Thanks to this platform, I was able to arrange blood for my friend in an emergency. Highly recommended!" 
            mail="vikram54@gmail.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
