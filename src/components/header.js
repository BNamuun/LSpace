import Carousel from "react-bootstrap/Carousel";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import Planet from "../images/Earth - 56466.mp4";
import Mars from "../images/Mars - 65129.mp4";
import Aurora from "../images/Aurora Borealis - 3117.mp4";
function Header() {
  return (
    <Carousel
      fade
      style={{ height: "100vh" }}
      className="col-lg-12 col-md-12 col-sm-12 col-12"
    >
      <Carousel.Item style={{ height: "100vh" }}>
        <video
          className="d-block w-100 h-100"
          src={Planet}
          autoPlay
          loop
          muted
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="d-flex text-start flex-wrap flex-column">
            <h3 className="text">Сансар судлал</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <AwesomeButton
              style={{ width: "200px", fontSize: "1.1rem" }}
              type="primary"
            >
              {" "}
              Дэлгэрэнгүй
            </AwesomeButton>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "100vh" }}>
        <video
          className="d-block w-100 h-100"
          src={Mars}
          autoPlay
          loop
          muted
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h3 className="text">Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Carousel.Caption> */}
        <Carousel.Caption>
          <div className="d-flex text-start flex-wrap flex-column">
            <h3 className="text">Сансар судлал</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <AwesomeButton
              style={{ width: "200px", fontSize: "1.1rem" }}
              type="primary"
            >
              {" "}
              Дэлгэрэнгүй
            </AwesomeButton>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "100vh" }}>
        <video
          className="d-block w-100 h-100"
          src={Aurora}
          autoPlay
          loop
          muted
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className="d-flex text-start flex-wrap flex-column">
            <h3 className="text fw-bolder">Сансар судлал</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <AwesomeButton
              style={{ width: "200px", fontSize: "1.1rem" }}
              type="primary"
            >
              {" "}
              Дэлгэрэнгүй
            </AwesomeButton>
          </div>
        </Carousel.Caption>
        {/* <Carousel.Caption>
          <div className="text-end">
            <h3 className="text">Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </div>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default Header;
