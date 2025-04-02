import React, { useState } from "react";
import "./Navbar.css";
import SignIn from "./SignIn";
import Login from "./Login";

const Navbar = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">Stock Sentiment</h1>
      <div className="nav-buttons">
        <button className="nav-btn" onClick={() => setShowSignIn(true)}>Sign In</button>
        <button className="nav-btn" onClick={() => setShowLogin(true)}>Login</button>
      </div>

      {/* Popups */}
      {showSignIn && <SignIn onClose={() => setShowSignIn(false)} />}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </nav>
  );
};

export default Navbar;








