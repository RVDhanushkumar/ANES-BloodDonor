import React, { useState, useEffect } from "react";
import BloodRequest from "./BloodRequest";
import "./BloodList.css";

const BloodList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [blood, setBlood] = useState("All");
  const [alldata,setalldata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://blood-ey76.onrender.com/user/getAllEntries");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setalldata(result);
        console.log(alldata);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
        setData(blood === "All" ? alldata : alldata.filter(donor => donor.bloodgroup === blood));
      }
    fetchData();
  }, [blood,alldata]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="blood-list-container">
      <BloodRequest />
      <h1 className="title">Available Donors</h1>
      <div className="filter-container">
        <label><span style={{textShadow:"0px 0px 3px white"}}>🟢 </span>LIVE</label>
        <div>
        <label htmlFor="blood-group">Filter by Blood Group:</label>
        <select id="blood-group" value={blood} onChange={(e) => setBlood(e.target.value)}>
          <option value="All">All</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
        </div>
      </div>
      <div className="table-wrapper">
        <table className="blood-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Blood Group</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={index}>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.bloodgroup}</td>
                <td>{user.mobile}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BloodList;