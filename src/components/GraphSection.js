import Chart from "chart.js/auto";
export function GraphSection() {
  return (
    <div className="midcont container-fluid">
      <h2 className="pb-2 border-bottom">Мэдээ мэдээлэл</h2>
      <div className="chartsPart d-flex mt-3 flex-wrap justify-content-around">
        <div className="ChartSize col-lg-5 col-md-6 col-sm-12 col-12 me-2">
          <h4 className="text-black text-center">Геосоронзон Kp индекс</h4>
          <canvas id="myChart" />
        </div>
        {/* <div class="col-lg-5 col-md-6 col-sm-12 col-12 me-2">
            <h4 class="text-black text-center">Нарны 23, 24-р цикл</h4>
            <img src="/images/SolarCycle.jpg" width="100%" alt="SolarCycle23-24">
         </div> */}
        <div className="ChartSize col-lg-5 col-md-6 col-sm-12 col-12 me-2">
          <h4 className="text-black text-center"> Sunspot number</h4>
          <canvas id="config" />
        </div>
        <div className="ChartSize col-lg-5 col-md-6 col-sm-12 col-12 me-2">
          <h4 className="text-black text-center"> F10.7 CM RADIO EMISSIONS</h4>
          <canvas id="Flux" />
        </div>
        <div className="ChartSize col-lg-5 col-md-6 col-sm-12 col-12 me-2">
          <h4 className="text-black text-center"> Dst Geomagnetic index</h4>
          <canvas id="Dst" />
        </div>
      </div>
    </div>
  );
}
