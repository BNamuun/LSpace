import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  aspectRatio: 1.5,
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Sunspot Number",
    },
  },
};

export function Sunspot() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const ssn = [];
      const date = [];
      const smoothedSSN = [];

      const res = await fetch(
        "https://services.swpc.noaa.gov/json/solar-cycle/sunspots.json"
      );
      let data1 = await res.json();
      const dataRange = data1.slice(2952, data1.length);
      console.log(dataRange.length);
      dataRange.map((item) => ssn.push(item.ssn));
      dataRange.map((item) => date.push(item["time-tag"].slice(0, 4)));

      const response = await fetch(
        "https://services.swpc.noaa.gov/json/solar-cycle/sunspots-smoothed.json"
      );
      let data2 = await response.json();
      const dataRangeSmoothed = data2.slice(2952, data2.length);
      // console.log(dataRangeSmoothed);
      // console.log(dataRangeSmoothed.length);
      dataRangeSmoothed.map((item) => smoothedSSN.push(item.smoothed_ssn));
      // console.log(smoothedFlux);

      setData({
        labels: date,
        datasets: [
          {
            label: "smoothed SSN",
            data: smoothedSSN.slice(0, smoothedSSN.length - 6),
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderColor: "#FF0000",
            pointRadius: 0,
            order: 0,
            fill: false,
          },
          {
            label: "Monthly SSN",
            data: ssn,
            borderColor: "#42032C",
            order: 1,
            fill: false,
          },
        ],
      });
    }

    fetchData();
  }, []);

  if (!data) return null; // Hervee data ni undefined bh yum bol yu ch bitgii garga

  return <Line options={options} data={data} />; // hervee defined bh yum bol eniig garga
}
