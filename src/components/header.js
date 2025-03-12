import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import pic from "../assets/logo.png";

export default function Header() {
    const [drop, setDrop] = useState(false);

    const handleLinkClick = () => {
        setDrop(false);
    };

    return (
        <nav className="navbar">
            <Link to="/"><div className="logo">
                <img src={pic} height="50px" alt="logo" /> ANES
            </div></Link>
            <div className="nav-links">
                <Link to="/" onClick={handleLinkClick}>Home</Link>
                <Link to="/register" className="sign-in" onClick={handleLinkClick}>Donate</Link>
                <Link to="/getallData" onClick={handleLinkClick}>Request Blood</Link>
                <Link to="/about" className="sign-in" onClick={handleLinkClick}>About</Link>
                <Link to="/hall-of-fame" className="sign-in" onClick={handleLinkClick}>Hall of Fame</Link>
            </div>

            <div className="extend">
                <div className="inner" onClick={() => setDrop(!drop)}>
                    ☰
                </div>
            </div>

            {/* Sidebar Menu */}
            {drop && (
                <div className={`sidemenu active`}>
                    <div className="link"><Link to="/" onClick={handleLinkClick}>Home</Link></div>
                    <div className="link"><Link to="/register" className="sign-in" onClick={handleLinkClick}>Donate</Link></div>
                    <div className="link"><Link to="/getallData" onClick={handleLinkClick}>Request Blood</Link></div>
                    <div className="link"><Link to="/about" className="sign-in" onClick={handleLinkClick}>About</Link></div>
                    <div className="link"><Link to="/hall-of-fame" className="sign-in" onClick={handleLinkClick}>Hall of Fame</Link></div>
                </div>
            )}
        </nav>
    );
}
