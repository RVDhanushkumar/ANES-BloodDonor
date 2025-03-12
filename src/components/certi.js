import React from 'react';
import "./certi.css";

const Certi = () => {
  return (
    <div className="certi_main">
      <div className="cleft">
        <img src="https://www.udaipurvibes.com/wp-content/uploads/2018/08/blood-camp-certificate-with-seal-768x550.png" alt="Certificate of Donation" className="certi_img" />
      </div>
      <div className="cright">
        <h2>🏅 Be a Lifesaver & Get Recognized! 🩸✨</h2>
        <p>
          Your <strong>one donation</strong> can <strong>save up to three lives</strong>, and we believe every hero deserves recognition! 🌟 
          As a token of appreciation for your selfless act, you will receive a <strong>Certificate of Blood Donation</strong>, a badge of honor for your generosity.
        </p>
        
        <h3>🎗 Why is this special?</h3>
        <ul>
          <li>✅ <strong>Official Recognition</strong> – A testament to your kindness and humanity.</li>
          <li>✅ <strong>Inspire Others</strong> – Show your achievement and encourage more heroes.</li>
          <li>✅ <strong>A Proud Keepsake</strong> – A reminder of the lives you’ve touched.</li>
        </ul>

        <p className="cta">
          💪 <strong>Give Blood. Save Lives. Get Honored.</strong><br />
          Be the reason someone smiles today—<strong>donate & receive your certificate of appreciation</strong>🏆❤️
        </p>
      </div>
    </div>
  );
};

export default Certi;
