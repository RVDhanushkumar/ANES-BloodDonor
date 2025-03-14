import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";
import "./BloodRequest.css";

const BloodRequest = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    bloodgroup: "",
    location: "",
  });
  const [loading,setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://blood-ey76.onrender.com/user/request-blood", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setDialogMessage(result.message || "Request submitted successfully!");
      setDialogOpen(true);

      setFormData({ fullName: "", phone: "", email: "", bloodgroup: "", location: "" });
    } catch (err) {
      setDialogMessage("Error: " + err.message);
      setDialogOpen(true);
    }
    setLoading(false);
  };

  return (
    <div className="blood-request-container">
      <h2>Emergency Blood Request</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Contact Number"
          value={formData.phone}
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
        <select name="bloodgroup" value={formData.bloodgroup} onChange={handleChange} required>
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
        <button type="submit">{loading?"Requesting in process":"Request Blood"}</button>
      </form>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Response</DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogMessage}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BloodRequest;
