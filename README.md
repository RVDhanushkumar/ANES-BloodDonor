# 🩸 ANES-Blood Donor Platform

### 📢 Bridging the Gap Between Blood Donors and Recipients

The **ANES-Blood Donor Platform** is a secure and user-friendly application that connects blood donors with recipients in need. Our platform ensures timely communication by notifying potential donors through email and providing a **Certificate of Appreciation** after successful donations.

---

## 🎯 Key Features

✅ **User Registration & Authentication**  
- Secure and intuitive user registration and login system.  
- Encrypted password storage with secure session management.  

✅ **Blood Request & Donor Matching**  
- Recipients can raise requests for required blood groups.  
- Automated matching and notification to compatible donors.  

✅ **Email Notifications via Nodemailer**  
- Instant email notifications sent to matching donors.  
- Confirmation and certification emails post-donation.  

✅ **Certificate of Appreciation**  
- Automatic generation and dispatch of a certificate to donors.  

✅ **Robust Security Measures**  
- Input validation with **Zod** to prevent invalid data.  
- Rate limiting to mitigate abuse and prevent DDoS attacks.  

✅ **Admin Dashboard**  
- View and manage donor/recipient records.  
- Monitor and validate donation requests efficiently.  

---

## 🛠️ Tech Stack

### 🎨 Frontend
- **ReactJS** – For creating an intuitive and responsive user interface.  
- **TailwindCSS/Bootstrap** – Ensuring a modern and professional design.  

### ⚙️ Backend
- **Node.js** – High-performance server environment.  
- **Express.js** – Lightweight and efficient web framework.  

### 📚 Database
- **MongoDB** – NoSQL database to store donor and recipient information securely.  

### 📧 Email Management
- **Nodemailer** – For sending notifications and certificates efficiently.  

### 🛡️ Security Libraries
- **Zod** – Schema-based validation to prevent incorrect or malicious data.  
- **Rate Limiter** – Protection against DDoS and brute-force attacks.  
- Additional security measures include:  
  - XSS and SQL injection prevention  
  - CSRF protection  
  - Input sanitization  

---

## 📧 Email Workflow
- **Registration Confirmation** – Sent immediately upon successful registration.  
- **Donation Request Alert** – Sent to potential matching donors when a request is raised.  
- **Certificate of Appreciation** – Sent to donors post successful blood donation.  

---

## 🩸 Certificate Generation
After a successful donation, a **Certificate of Appreciation** is automatically generated and dispatched via email in PDF format to acknowledge the donor's contribution.

---

## 🛡️ Security Best Practices
- **Zod** – Validates user inputs and ensures schema compliance.  
- **Rate Limiter** – Limits excessive API requests to prevent abuse.  
- **Password Encryption** – Utilizes **bcrypt.js** for hashing passwords.  
- **XSS and SQL Injection Prevention** – Mitigates common security threats.  

---

