import React, { useState } from "react";
import axios from "axios";
import SentimentChart from "../components/SentimentChart";

const Dashboard = () => {
  const [text, setText] = useState("");
  const [sentimentData, setSentimentData] = useState(null);

  const analyzeSentiment = async () => {
    const response = await axios.post("http://127.0.0.1:8000/analyze", { text });
    setSentimentData(response.data.scores);
  };

  return (
    <div className="p-5">
      <h2>Enter Stock Market News or Tweet</h2>
      <textarea onChange={(e) => setText(e.target.value)} />
      <button onClick={analyzeSentiment}>Analyze</button>

      {sentimentData && <SentimentChart sentimentData={sentimentData} />}
    </div>
  );
};

export default Dashboard;
