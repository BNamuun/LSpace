import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavTop from "./components/nav";
import Header from "./components/header";
import { Component } from "./components/paraPart";
import { Graph } from "./Charts/Graph";

function App() {
  return (
    <>
      <NavTop />
      <Header />
      <Component />
      <Graph />
      {/* <Tables /> */}
    </>
  );
}

export default App;
