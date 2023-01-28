import { Graph } from "../Charts/Graph";
import Header from "../components/header";
import { News } from "../components/News";
import { Component } from "../components/paraPart";

export function HomePage() {
  return (
    <>
      <Header />
      <Component />
      <Graph />
      <News />
    </>
  );
}
