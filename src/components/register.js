import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
const genders = ["Male", "Female", "Other"];

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    bloodgroup: "",
    mobile: "",
    email: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [bloodDialogOpen, setBloodDialogOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCaptchaChange = (value) => setCaptchaValue(value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValue) {
      setError("Please complete the CAPTCHA.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://sab-ka-blood.vercel.app/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captcha: captchaValue }),
      });

      if (!response.ok) throw new Error(`${response.message}`);

      setSuccessDialogOpen(true);
      setFormData({ fullName: "", age: "", gender: "", bloodgroup: "", mobile: "", email: "", address: "" });
      setCaptchaValue(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSuccessClose = () => {
    setSuccessDialogOpen(false);
    navigate("/");
  };

  return (
    <div style={{ backgroundColor: "#fef0ef", minHeight: "100vh", padding: "20px", paddingTop: "100px" }}>
      <h1 style={{ textAlign: "center", color: "rgba(98, 176, 189, 0.81)", marginBottom: "20px" }}>Registration Form</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "#fff", padding: "30px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        {Object.keys(formData).map((key) => {
          if (key === "bloodgroup") return null;
          return (
            <div key={key} style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px", color: "#333" }}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
              {key === "gender" ? (
                <select name="gender" value={formData.gender} onChange={handleChange} required style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}>
                  <option value="" disabled>Select Gender</option>
                  {genders.map((gender) => (
                    <option key={gender} value={gender}>{gender}</option>
                  ))}
                </select>
              ) : (
                <input type={key === "age" || key === "mobile" ? "number" : "text"} name={key} value={formData[key]} onChange={handleChange} required style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }} />
              )}
            </div>
          );
        })}

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px", color: "#333" }}>Blood Group</label>
          <input type="text" name="bloodgroup" value={formData.bloodgroup} readOnly onClick={() => setBloodDialogOpen(true)} required style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ddd", cursor: "pointer", backgroundColor: "#f9f9f9" }} placeholder="Select Blood Group" />
        </div>

        <div style={{ marginBottom: "15px", textAlign: "center" }}>
          {process.env.REACT_APP_CAPTCHA_SITE_KEY ? (
            <ReCAPTCHA sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY} onChange={handleCaptchaChange} />
          ) : (
            <p style={{ color: "red", textAlign: "center" }}>CAPTCHA site key is missing</p>
          )}
        </div>

        <button type="submit" disabled={loading} style={{ width: "100%", padding: "10px", backgroundColor: "rgba(92, 203, 222,0.8)", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          {loading ? "Registering..." : "Register"}
        </button>

        {error && <div style={{ color: "#ff6b6b", textAlign: "center", marginTop: "10px" }}>Error: {error}</div>}
      </form>

      <Dialog open={bloodDialogOpen} onClose={() => setBloodDialogOpen(false)}>
        <div style={{ padding: "20px" }}>
          <h3>Select Blood Group</h3>
          {bloodGroups.map((group) => (
            <div key={group} onClick={() => { setFormData({ ...formData, bloodgroup: group }); setBloodDialogOpen(false); }} style={{ padding: "10px", cursor: "pointer", borderBottom: "1px solid #ddd" }}>
              {group}
            </div>
          ))}
        </div>
      </Dialog>

      <Dialog open={successDialogOpen} onClose={handleSuccessClose}>
        <DialogTitle>Thank You!</DialogTitle>
        <DialogContent>
          <p>Registration successful, check your email for verification link</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSuccessClose} color="primary" variant="contained">OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Register;
