import React, { useState } from "react";
import "./BloodRequest.css";

const BloodRequest = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email:"",
    bloodGroup: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Emergency Blood Request Submitted!\n\nName: ${formData.name}\nContact: ${formData.contact}\nBlood Group: ${formData.bloodGroup}\nLocation: ${formData.location}`);
    setFormData({ name: "", contact: "", bloodGroup: "", location: "" });
  };

  return (
    <div className="blood-request-container">
      <h2>Emergency Blood Request</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          required
        />
         <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required>
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
        <input
          type="text"
          name="location"
          placeholder="Location (City/Hospital)"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <button type="submit">Request Blood</button>
      </form>
    </div>
  );
};

export default BloodRequest;
