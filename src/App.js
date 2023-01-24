import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ClientView } from "./client/clientView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ClientView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
