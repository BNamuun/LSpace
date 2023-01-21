import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavTop from "./components/nav";
import Header from "./components/header";
import { Component } from "./components/paraPart";
import { GraphSection } from "./components/GraphSection";

function App() {
  return (
    <>
      <NavTop />
      <Header />
      <Component />
      <GraphSection />
    </>
  );
}

export default App;
