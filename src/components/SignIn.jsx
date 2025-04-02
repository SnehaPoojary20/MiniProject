import React from "react";
import "./Popup.css";

const SignIn = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Sign In</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <div className="popup-buttons">
          <button className="popup-btn green">Sign In</button>
          <button className="popup-btn red" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;



