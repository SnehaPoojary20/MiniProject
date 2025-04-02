import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const SentimentChart = ({ sentimentData }) => {
  return (
    <div>
      {sentimentData && (
        <>
          <Bar
            data={{
              labels: ["Positive", "Negative", "Neutral"],
              datasets: [
                {
                  label: "Sentiment Scores",
                  data: [sentimentData.pos, sentimentData.neg, sentimentData.neu],
                  backgroundColor: ["green", "red", "blue"],
                },
              ],
            }}
          />
          <Pie
            data={{
              labels: ["Positive", "Negative", "Neutral"],
              datasets: [
                {
                  data: [sentimentData.pos, sentimentData.neg, sentimentData.neu],
                  backgroundColor: ["green", "red", "blue"],
                },
              ],
            }}
          />
        </>
      )}
    </div>
  );
};

export default SentimentChart;
