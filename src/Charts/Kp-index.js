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
  aspectRatio: 1.5,
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: " Planetary Kp index (3 hour data)",
    },
  },
};

export function KpIndex() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const indexVal = [];
      const DateTime = [];
      // const dateP = [];
      const TimeArr = [];
      // const TimeP = [];
      const res = await fetch(
        "https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json#"
      );
      let data = await res.json();
      // console.log(data);
      data.map((item) =>
        // cosnt DateVal =  DateTime.push((item)[0])
        indexVal.push(item[1])
      );
      indexVal.shift();
      // console.log({ indexVal });

      data.map((item1) =>
        // cosnt DateVal =  DateTime.push((item)[0])
        DateTime.push(item1[0])
      );
      DateTime.shift();
      // console.log({ DateTime });
      for (let i = 0; i < DateTime.length; i++) {
        const pp = new Date(DateTime[i]);
        const kkk = pp.toLocaleDateString("en-us", { month: "short" });
        // const MonthD = pp.getMonth(pp);
        const DayD = pp.getDate(pp);
        // console.log(MonthD);
        let hour = pp.getHours();
        let minS = pp.getMinutes();
        if (hour < 10) {
          hour = "0" + hour;
        }
        if (minS < 10) {
          minS = "0" + minS;
        }
        const DateDD = kkk + " " + DayD;
        // console.log({ DateDD });
        const JJ = hour + ":" + minS;
        TimeArr.push(DateDD + " " + JJ);
      }
      // console.log(smoothedFlux);

      setData({
        labels: TimeArr.slice(-15),
        datasets: [
          {
            label: " Planetary Kp index (3 hour data)",
            data: indexVal.slice(-15),
            backgroundColor: "#00425A",
            borderWidth: 2,
          },
        ],
      });
    }

    fetchData();
  }, []);

  if (!data) return null; // Hervee data ni undefined bh yum bol yu ch bitgii garga

  return <Bar options={options} data={data} />; // hervee defined bh yum bol eniig garga
}
