import { Route, Routes } from "react-router-dom";
import { TableCIR } from "../Charts/tableCIR";
import { TableCMEFast } from "../Charts/tableCMEFast";
import { AuroraN } from "../components/AuroraN";
import { Footer } from "../components/Footer";
import { GMIndex } from "../components/GMindex";
import { GStormPred } from "../components/GstormPred";
import { KpInd } from "../components/KpInd";
import NavTop from "../components/nav";
import { Pulsations } from "../components/pulsation";
import { HomePage } from "./HomePage";

export function ClientView() {
  return (
    <>
      <NavTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cirList" element={<TableCIR />} />
        <Route path="/cmeList" element={<TableCMEFast />} />
<<<<<<< HEAD
        <Route path="/pulsation" element={<Pulsations />} />
        <Route path="/prediction" element={<GStormPred />} />
        <Route path="/GMIndex" element={<GMIndex />} />
        <Route path="/GMIndex/KpIndex" element={<KpInd />} />
        <Route path="/Aurora" element={<AuroraN />} />
=======
        <Route path="/pulsation" element={<Pulsation />} />
>>>>>>> e07a317f5d760cfe37aadf01727a5f84e8ca883f
      </Routes>
      <Footer />
    </>
  );
}
