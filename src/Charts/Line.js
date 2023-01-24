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
      text: "F10.7 CM RADIO EMISSIONS",
    },
  },
};

export function Lines() {
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
      dataRange.map((item) => flux.push(item["f10.7"]));
      dataRange.map((item) => dateFlux.push(item["time-tag"].slice(0, 4)));

      const response = await fetch(
        "https://services.swpc.noaa.gov/json/solar-cycle/f10-7cm-flux-smoothed.json"
      );
      let data2 = await response.json();
      const dataRangeSmoothed = data2;
      dataRangeSmoothed.map((item) =>
        smoothedFlux.push(item["smoothed_f10.7"])
      );
      const newArr = smoothedFlux.map((item) =>
        item < 0 ? (item = NaN) : item
      );

      setData({
        labels: dateFlux,
        datasets: [
          {
            label: "smoothed_f10.7",
            data: newArr.slice(0, newArr.length - 6),
            backgroundColor: "#FF0000",
            borderColor: "#FF0000",
            pointRadius: 0,
            order: 0,
            fill: true,
          },
          {
            label: "f10.7",
            data: flux,
            borderColor: "#13005A",
            order: 1,
            fill: false,
            backgroundColor: "#13005A",
          },
        ],
      });
    }

    fetchData();
  }, []);

  if (!data) return null; // Hervee data ni undefined bh yum bol yu ch bitgii garga

  return <Line options={options} data={data} />; // hervee defined bh yum bol eniig garga
}
