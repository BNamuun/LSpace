import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import textfile from "../data/CIR_list.txt";
export function Tables() {
  const [dataT, setTable] = useState();
  useEffect(() => {
    async function fetchData() {
      let response = await fetch(textfile);
      let tableContent = "";
      const txt = await response.text().then((str) => {
        return str?.split("\n"); // return the string after? splitting it.
      });
      let result = txt;
      let prevYear = "";
      //   console.log({ result });
      for (let i = 0; i < result.length; i++) {
        const a1 = result[i]?.split("\t")[0]?.split(" ")[0];
        const a2 = result[i]?.split("\t")[0]?.split(" ")[1];
        const a3 = result[i]?.split("\t")[1]?.split(" ")[0];
        const a4 = result[i]?.split("\t")[1]?.split(" ")[1];
        // const ex = [];
        console.log({ a1, a2, a3, a4 });
        // console.log(ex[0].a1);
        // console.log(dataT);
        // if (prevYear === a1?.split("/")[0]) {
        //   tableContent += "<tr>";
        // } else {
        //   tableContent += "<tr class='table-active'>";
        // }

        // prevYear = a1?.split("/")[0];
        // tableContent += "<tr>";
        // tableContent += "<td>" + a1 + "</td>";
        // tableContent += "<td>" + a2 + "</td>";
        // tableContent += "<td>" + a3 + "</td>";
        // tableContent += "<td>" + a4 + "</td>";
        // tableContent += "</tr>";
        // // console.log({ tableContent });
        // setTable(tableContent);
      }
    }
    fetchData();
  }, []);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Start date (Y/M/D)</th>
          <th>Start time (UT)</th>
          <th>End date (Y/M/D)</th>
          <th>End time (UT)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {/* <td> {dataT.a1}</td>
          <td> {dataT.a2}</td>
          <td> {dataT.a3}</td>
          <td> {dataT.a4}</td> */}
        </tr>
      </tbody>
    </Table>
  );
}
