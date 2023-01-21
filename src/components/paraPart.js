// import { useParallax, Parallax } from "react-scroll-parallax";
import austronat from "../images/austronat.png";
import spaceBackground from "../images/spaceBackground.png";
import { Parallax } from "react-parallax";
import { Menu } from "./menu";

export const Component = () => (
  <div
    className="d-flex"
    style={{ backgroundImage: `url(${spaceBackground})` }}
  >
    <Parallax className="parallaxParent" bgImage={austronat} strength={340}>
      <div className="content d-flex"></div>
    </Parallax>
    <div className="sec">
      <Menu />
    </div>
  </div>
);
