// import { useParallax, Parallax } from "react-scroll-parallax";
import austronat from "../images/austronat.png";
import spaceBackground from "../images/spaceBackground.png";
import { Parallax } from "react-parallax";
import { Menu } from "./menu";

export const Component = () => (
  <div
    className="d-flex flex-md-wrap h-100"
    style={{ backgroundImage: `url(${spaceBackground})` }}
  >
    <Parallax
      className="parallaxParent d-flex col-lg-6 d-md-block"
      bgImage={austronat}
      strength={340}
    >
      <div className="content d-flex"></div>
    </Parallax>
    <div className="sec col-lg-6 col-md-12 col-sm-12 col-12">
      <Menu />
    </div>
  </div>
);
