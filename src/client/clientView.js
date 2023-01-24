import { Route, Routes } from "react-router-dom";
import { TableCIR } from "../Charts/tableCIR";
import { TableCME } from "../Charts/tableCME";
import NavTop from "../components/nav";
import { HomePage } from "./HomePage";

export function ClientView() {
  return (
    <>
      <NavTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cirList" element={<TableCIR />} />
        <Route path="/cmeList" element={<TableCME />} />
      </Routes>
    </>
  );
}
