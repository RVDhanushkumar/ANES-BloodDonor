import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import pic from "../assets/logo.png";

export default function Header() {
    const [drop, setDrop] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={pic} height="50px" alt="logo" /> ANES
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/register" className="sign-in">Donate</Link>
                <Link to="/getallData">Request Blood</Link>
                <Link to="/about" className="sign-in">About</Link>
                <Link to="/hall-of-fame" className="sign-in">Hall of Fame</Link>
            </div>
            <div className="extend">
                <div className="inner" onClick={() => setDrop(!drop)}>
                    {drop ? "X" : "☰"}
                </div>
            </div>
            <div className={`sidemenu ${drop ? "active" : ""}`}>
                <div className="link"><Link to="/">Home</Link></div>
                <div className="link"><Link to="/register" className="sign-in">Donate</Link></div>
                <div className="link"><Link to="/getallData">Request Blood</Link></div>
                <div className="link"><Link to="/about" className="sign-in">About</Link></div>
                <div className="link"><Link to="/hall-of-fame" className="sign-in">Hall of Fame</Link></div>
            </div>
        </nav>
    );
}
