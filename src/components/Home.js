import React from 'react';
import "./home.css";
import pic1 from "../assets/bg.png"
import Whydonate from './whydonate';
import Certi from './certi';
import TestimonialFullWidth from './testi';

const Home = () => {
  return (
    <div className='home_main'>
      <div className='home'>
          <div className='left'>
              <div className='text'>
              <h1>Save Lives, Be a Hero – <span style={{color:"rgba(92, 203, 222)"}}>Donate Blood Today</span></h1>
              <p>Donate blood, save lives! A single donation can make a life-saving difference for <br /> those in need. Join us in this noble cause and be the reason someone gets a second<br /> chance. Every drop counts! ❤️</p>
              <button>Donate Now</button>
              </div>
          </div>
          <div className='pic'>
              <div className='right'>
              <div className='extra'></div>
              <img src={pic1} loading='lazing' alt='pic'></img>
              </div>
          </div>
      </div>
      <Whydonate />
      <Certi />
      <div className='tes'>
        <h2>Testimonials</h2>
        
      <div className='testi'>
        <TestimonialFullWidth name="Ananya" review="A lifesaving platform! I found a donor within minutes and received the help I desperately needed. This website truly connects heroes with those in need" mail="annanya13@gmail.com"/>
        <TestimonialFullWidth name="Rahul M." review="Donating blood has never been easier. This site makes the process smooth, and knowing I helped someone in need is the best feeling" mail="rahul14@gmail.com"/>
        <TestimonialFullWidth name="Vikram S." review="Quick, reliable, and impactful. Thanks to this platform, I was able to arrange blood for my friend in an emergency. Highly recommended" mail="vikram54@gmail.com"/>
      </div>
      </div>
    </div>
  )
}

export default Home;