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
      text: "Dst Geomagnetic index",
    },
  },
};

export function DstIndex() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const dstVal = [];
      const dateVal = [];
      const TimeArrDst = [];

      const res = await fetch(
        "https://services.swpc.noaa.gov/products/kyoto-dst.json"
      );
      let data1 = await res.json();
      const dataRange = data1;
      console.log(dataRange[0]);

      dataRange.map((item) => dateVal.push(item[0]));
      dateVal.shift();
      console.log(dateVal);
      dataRange.map((items) => dstVal.push(items[1]));
      dstVal.shift();
      console.log(dstVal);
      for (let i = 0; i < dateVal.length; i++) {
        const pp = new Date(dateVal[i]);
        const kkk = pp.toLocaleDateString("en-us", { month: "short" });
        const MonthD = pp.getMonth(pp);
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
        TimeArrDst.push(DateDD + " " + JJ);
        // console.log(smoothedFlux);

        setData({
          labels: TimeArrDst,
          datasets: [
            {
              label: "kyoto-dst value",
              data: dstVal,
              backgroundColor: "rgba(255, 99, 132, 0.5)",
              borderColor: "#FF0000",
              order: 0,
              fill: true,
            },
          ],
        });
      }
    }

    fetchData();
  }, []);

  if (!data) return null; // Hervee data ni undefined bh yum bol yu ch bitgii garga

  return <Line options={options} data={data} />; // hervee defined bh yum bol eniig garga
}
