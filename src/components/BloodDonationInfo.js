import React, { useState } from "react";
import "./BloodDonationInfo.css"; // Import CSS file

const bloodData = {
  "A+": { canDonateTo: ["A+", "AB+"], canReceiveFrom: ["A+", "A-", "O+", "O-"] },
  "A-": { canDonateTo: ["A+", "A-", "AB+", "AB-"], canReceiveFrom: ["A-", "O-"] },
  "B+": { canDonateTo: ["B+", "AB+"], canReceiveFrom: ["B+", "B-", "O+", "O-"] },
  "B-": { canDonateTo: ["B+", "B-", "AB+", "AB-"], canReceiveFrom: ["B-", "O-"] },
  "AB+": { canDonateTo: ["AB+"], canReceiveFrom: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"] },
  "AB-": { canDonateTo: ["AB+", "AB-"], canReceiveFrom: ["A-", "B-", "AB-", "O-"] },
  "O+": { canDonateTo: ["O+", "A+", "B+", "AB+"], canReceiveFrom: ["O+", "O-"] },
  "O-": { canDonateTo: ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"], canReceiveFrom: ["O-"] },
};

const BloodDonationInfo = () => {
  const [selectedBloodType, setSelectedBloodType] = useState("O-");

  return (
    <div className="bdinfo_main">
    <div className="container">
      <h1 className="title">💙 Blood Donation Info 💙</h1>
      <p className="subtitle">Select Your Blood Type</p>

      <div className="blood-group-buttons">
        {Object.keys(bloodData).map((bloodType) => (
          <button
            key={bloodType}
            className={`blood-button ${selectedBloodType === bloodType ? "selected" : ""}`}
            onClick={() => setSelectedBloodType(bloodType)}
          >
            {bloodType}
          </button>
        ))}
      </div>

      <div className="info-card">
        <div className="info-block donor">
          <p className="info-title">You Can Receive From</p>
          <p className="info-list">{bloodData[selectedBloodType].canReceiveFrom.join(", ")}</p>
        </div>
        <div className="info-block receiver">
          <p className="info-title">You Can Donate To</p>
          <p className="info-list">{bloodData[selectedBloodType].canDonateTo.join(", ")}</p>
        </div>
      </div>

      <div className="donation-message">
        One Blood Donation can save up to <span className="highlight">Three Lives</span> ❤️
      </div>
    </div>
    </div>
  );
};

export default BloodDonationInfo;
