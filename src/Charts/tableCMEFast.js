import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import textfile from "../data/CIR_list.txt";

const data = [
  ["1997/05/15", "0000", "1997/05/15", "1937"],
  ["1997/05/26", "0024", "1997/05/30", "0959"],
  ["1997/08/03", "1044", "1997/08/04", "0300"],
  ["1997/10/01", "0053", "1997/10/03", "0607"],
  ["1997/10/10", "1632", "1997/10/15", "0820"],
  ["1997/11/06", "2250", "1997/11/09", "1200"],
  ["1998/01/06", "1418", "1998/01/08", "1011"],
  ["1998/01/28", "1600", "1998/01/31", "1647"],
  ["1998/05/02", "0500", "1998/05/07", "2013"],
  ["1998/10/18", "1954", "1998/10/20", "0921"],
  ["1998/11/12", "1606", "1998/11/17", "0054"],
  ["1999/04/16", "0144", "1999/04/21", "0739"],
  ["1999/06/27", "0003", "1999/06/28", "0509"],
  ["1999/07/27", "0627", "1999/07/30", "1913"],
  ["1999/09/22", "1201", "1999/09/25", "2205"],
  ["1999/10/20", "2032", "1999/10/28", "1314"],
  ["2000/01/21", "0954", "2000/01/27", "0616"],
  ["2000/02/11", "0340", "2000/02/17", "2300"],
  ["2000/04/06", "1642", "2000/04/12", "1920"],
  ["2000/05/23", "1500", "2000/05/29", "1614"],
  ["2000/06/08", "0912", "2000/06/11", "1745"],
  ["2001/01/23", "1052", "2001/01/28", "1500"],
  ["2001/03/03", "1123", "2001/03/06", "1856"],
  ["2001/04/29", "0010", "2001/04/29", "0741"],
  ["2001/07/08", "0210", "2001/07/09", "1221"],
  ["2001/08/17", "0210", "2001/08/19", "0643"],
  ["2001/10/11", "1701", "2001/10/12", "0020"],
  ["2001/11/24", "0556", "2001/11/29", "0121"],
  ["2002/03/18", "0251", "2002/03/20", "1502"],
  ["2002/05/11", "0621", "2002/05/13", "1455"],
  ["2002/05/23", "0807", "2002/05/27", "0316"],
  ["2002/08/01", "2311", "2002/08/05", "2323"],
  ["2002/08/18", "1847", "2002/08/25", "0835"],
  ["2002/09/07", "1301", "2002/09/09", "1954"],
  ["2003/02/01", "1813", "2003/02/03", "1903"],
  ["2003/05/29", "1623", "2003/05/30", "1644"],
  ["2003/06/15", "2211", "2003/06/20", "0853"],
  ["2004/01/22", "0137", "2004/01/27", "1318"],
  ["2004/07/22", "0037", "2004/08/04", "0720"],
  ["2004/11/11", "2159", "2004/11/19", "1440"],
  ["2004/12/12", "2143", "2004/12/16", "0218"],
  ["2005/01/07", "0446", "2005/01/09", "1054"],
  ["2005/05/29", "1407", "2005/06/04", "1005"],
  ["2005/06/11", "2355", "2005/06/15", "0133"],
  ["2005/07/10", "0954", "2005/07/13", "0554"],
  ["2005/08/23", "0000", "2005/08/30", "2103"],
  ["2005/09/11", "0541", "2005/09/15", "0926"],
  ["2006/12/14", "1414", "2006/12/15", "1300"],
  ["2011/08/05", "1325", "2011/08/11", "2101"],
  ["2011/09/08", "1447", "2011/09/10", "1500"],
  ["2011/09/25", "1147", "2011/09/27", "2106"],
  ["2011/10/24", "0500", "2011/10/30", "1154"],
  ["2012/01/21", "1222", "2012/01/24", "1505"],
  ["2012/03/08", "1104", "2012/03/12", "0915"],
  ["2012/07/14", "0104", "2012/07/20", "0450"],
  ["2012/09/30", "0204", "2012/10/05", "0050"],
  ["2013/01/17", "1200", "2013/01/18", "1200"],
  ["2013/03/17", "0559", "2013/03/19", "1600"],
  ["2013/04/30", "1300", "2013/05/03", "0900"],
  ["2013/06/06", "1500", "2013/06/08", "0000"],
  ["2013/06/28", "0000", "2013/06/30", "0900"],
  ["2014/02/18", "0640", "2014/02/19", "2100"],
  ["2014/02/20", "0318", "2014/02/22", "1200"],
  ["2014/04/11", "0600", "2014/04/12", "2000"],
  ["2014/04/29", "2000", "2014/05/01", "1300"],
  ["2014/09/12", "1553", "2014/09/14", "0200"],
  ["2014/11/10", "0220", "2014/11/11", "2000"],
  ["2014/12/21", "1911", "2014/12/22", "1700"],
  ["2015/01/17", "0615", "2015/01/17", "2100"],
  ["2015/03/17", "0445", "2015/03/18", "1200"],
  ["2015/06/22", "1833", "2015/06/24", "1400"],
  ["2015/11/06", "1818", "2015/11/08", "0200"],
  ["2015/12/19", "1616", "2015/12/21", "2000"],
  ["2016/01/18", "2157", "2016/01/22", "1900"],
  ["2016/10/12", "2212", "2016/10/14", "1600"],
];
export function TableCMEFast() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     let response = await fetch(textfile);
  //     const txt = await response.text().then((str) => {
  //       return str?.split("\n"); // return the string after? splitting it.
  //     });
  //     let result = txt;
  //     const a = [];
  //     for (let i = 0; i < result.length; i++) {
  //       const a1 = result[i]?.split("\t")[0]?.split(" ")[0];
  //       const a2 = result[i]?.split("\t")[0]?.split(" ")[1];
  //       const a3 = result[i]?.split("\t")[1]?.split(" ")[0];
  //       const a4 = result[i]?.split("\t")[1]?.split(" ")[1];
  //       a.push([a1, a2, a3, a4]);
  //     }
  //     setData(a);
  //     console.log({ a });
  //   }
  //   fetchData();
  // }, []);
  return (
    <div className="container px-4 py-5" id="custom-cards">
      <h1 className="text-center">
        {" "}
        CME(Coronal Mass Ejections)-с үүдэлтэй соронзон шуурганы каталог
        1997-2018{" "}
      </h1>
      <Table striped bordered hover>
        <thead className="text-white bg-dark">
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
              <td className="font-weight-bold"> {index + 1}</td>
              <td> {item[0]}</td>
              <td> {item[1]}</td>
              <td> {item[2]}</td>
              <td> {item[3]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
