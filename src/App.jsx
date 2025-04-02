import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FileUpload from "./components/FileUpload";
import Chatbot from "./components/Chatbot";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Home />
        <FileUpload />
        <Chatbot/>
      </div>
      <Footer />
    </div>
  );
};

export default App;




