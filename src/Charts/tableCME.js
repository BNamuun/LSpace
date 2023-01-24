import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import textfile from "../data/CME_list.txt";
export function TableCME() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let response = await fetch(textfile);
      const txt = await response.text().then((str) => {
        return str?.split("\n"); // return the string after? splitting it.
      });
      let result = txt;
      const a = [];
      for (let i = 0; i < result.length; i++) {
        const a1 = result[i]?.split("\t")[0]?.split(" ")[0];
        const a2 = result[i]?.split("\t")[0]?.split(" ")[1];
        const a3 = result[i]?.split("\t")[1]?.split(" ")[0];
        const a4 = result[i]?.split("\t")[1]?.split(" ")[1];
        a.push([a1, a2, a3, a4]);
      }
      setData(a);
      console.log({ a });
    }
    fetchData();
  }, []);
  return (
    <>
      <h1>
        {" "}
        CME(Coronal Mass Ejections)-с үүдэлтэй соронзон шуурганы каталог
        1997-2018{" "}
      </h1>
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
          {data.map((item, index) => (
            <tr>
              <td> {index + 1}</td>
              <td> {item[0]}</td>
              <td> {item[1]}</td>
              <td> {item[2]}</td>
              <td> {item[3]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
