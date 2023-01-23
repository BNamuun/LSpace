import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

export function First() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const flux = [];
      const dateFlux = [];
      const smoothedFlux = [];

      const res = await fetch(
        "https://services.swpc.noaa.gov/json/solar-cycle/f10-7cm-flux.json"
      );
      let data1 = await res.json();
      const dataRange = data1;
      // console.log(dataRange.length);
      dataRange.map((item) => flux.push(item["f10.7"]));
      dataRange.map((item) => dateFlux.push(item["time-tag"].slice(0, 4)));

      const response = await fetch(
        "https://services.swpc.noaa.gov/json/solar-cycle/f10-7cm-flux-smoothed.json"
      );
      let data2 = await response.json();
      const dataRangeSmoothed = data2;
      // console.log(dataRangeSmoothed);
      // console.log(dataRangeSmoothed.length);
      dataRangeSmoothed.map((item) =>
        smoothedFlux.push(item["smoothed_f10.7"])
      );
      // console.log(smoothedFlux);

      setData({
        labels: dateFlux,
        datasets: [
          {
            label: "smoothed_f10.7",
            data: smoothedFlux.slice(0, smoothedFlux.length - 6),
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
          {
            label: "f10.7",
            data: flux,
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
        ],
      });
    }

    fetchData();
  }, []);

  if (!data) return null; // Hervee data ni undefined bh yum bol yu ch bitgii garga

  return <Bar options={options} data={data} />; // hervee defined bh yum bol eniig garga
}
