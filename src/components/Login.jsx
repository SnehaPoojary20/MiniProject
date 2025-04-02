import React from "react";
import "./Popup.css";

const Login = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Login</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <div className="popup-buttons">
          <button className="popup-btn green">Login</button>
          <button className="popup-btn red" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Login;





