import React from 'react'
import "./wdb.css";

const Whydonate = () => {
  return (
    <div className='wdb_main'>
        <div className='wdb_heading'>
            <h2>🩸 Why Donate Blood?</h2>
            <p>One donation can save up to three lives! Be a hero today.</p>
        </div>
        <div className='wdb_left'>
            <div className='infocards'>
                <div className='card'>
                    <h3>✅ Saves Lives</h3>
                    <p>💖 Your donation can help accident victims, surgeries, cancer patients, and more.</p>
                </div>
                <div className='card'>
                    <h3>💪 Keeps You Healthy</h3>
                    <p>🩸 Regular donation stimulates new blood cell production and improves circulation</p>
                </div>
                <div className='card'>
                    <h3>🤝 Supports Your Community</h3>
                    <p>🌍 Hospitals and blood banks always need supply. Your contribution makes a difference.</p>
                </div>
                <div className='card'>
                    <h3>🎖 Earn Rewards & Recognition</h3>
                    <p>🏅 Some organizations offer donor appreciation, health check-ups, and certificates.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Whydonate;