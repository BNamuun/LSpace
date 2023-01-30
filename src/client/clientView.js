import { Route, Routes } from "react-router-dom";
import { TableCIR } from "../Charts/tableCIR";
import { TableCMEFast } from "../Charts/tableCMEFast";
import { Footer } from "../components/Footer";
import NavTop from "../components/nav";
import { Pulsation } from "../components/pulsation";
import { HomePage } from "./HomePage";

export function ClientView() {
  return (
    <>
      <NavTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cirList" element={<TableCIR />} />
        <Route path="/cmeList" element={<TableCMEFast />} />
        <Route path="/pulsaton" element={<Pulsation />} />
      </Routes>
      <Footer />
    </>
  );
}
