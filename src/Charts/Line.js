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
        // item == 0 ? item = Nan : item =item
        smoothedFlux.push(item["smoothed_f10.7"])
      );
      // for (let i = 0; smoothedFlux.length; i++) {
      //   if (smoothedFlux[i] === -1) {
      //     smoothedFlux[i] = NaN;
      //   }
      // }

      // smoothedFlux.slice(0, smoothedFlux.length - 6);

      // console.log(smoothedFlux);

      setData({
        labels: dateFlux,
        datasets: [
          {
            label: "smoothed_f10.7",
            data: smoothedFlux.slice(0, smoothedFlux.length - 6),
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderColor: "#FF0000",
            pointRadius: 0,
            order: 0,
            fill: true,
          },
          {
            label: "f10.7",
            data: flux,
            borderColor: "#54B435",
            order: 1,
            fill: false,
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
        ],
      });
    }

    fetchData();
  }, []);

  if (!data) return null; // Hervee data ni undefined bh yum bol yu ch bitgii garga

  return <Line options={options} data={data} />; // hervee defined bh yum bol eniig garga
}
