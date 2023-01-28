import { DstIndex } from "./DstIndex";
import { KpIndex } from "./Kp-index";
import { Lines } from "./Line";
import { Sunspot } from "./SSN";

export function Graph() {
  return (
    <div className="container px-2 py-5" id="custom-cards">
      <h2 class="pb-2 border-bottom">Мэдээ мэдээлэл</h2>
      <div class="chartsPart d-flex mt-3 flex-wrap justify-content-around">
        <div class="ChartSize col-lg-5 col-md-6 col-sm-12 col-12 me-2 mb-5 ">
          <h4 class="text-black text-center"> Kp Геосоронзон индекс</h4>
          <KpIndex />
        </div>
        <div class="ChartSize col-lg-5 col-md-6 col-sm-12 col-12 me-2 mb-5">
          <h4 class="text-black text-center"> Нарны толбоны тоо</h4>
          <Sunspot />
        </div>
        <div class="ChartSize col-lg-5 col-md-6 col-sm-12 col-12 me-2">
          <h4 class="text-black text-center"> F10.7 CM Радио цацаргалт</h4>
          <Lines />
        </div>
        <div class="ChartSize col-lg-5 col-md-6 col-sm-12 col-12 me-2">
          <h4 class="text-black text-center"> Dst Геосоронзон индекс</h4>
          <DstIndex />
        </div>
      </div>
    </div>
  );
}
