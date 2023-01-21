import { Carousel } from "react-bootstrap";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import Planet from "../images/Planet - 25434.mp4";
import Mars from "../images/Mars - 65129.mp4";
import Aurora from "../images/Aurora Borealis - 3117.mp4";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function Videocar() {
  const Video = [
    {
      id: 1,
      title: "Planet",
      src: Planet,
      credit: "video ",
    },
    {
      id: 2,
      title: "Mars",
      src: Mars,
      credit: "video ",
    },
    {
      id: 3,
      title: "Aurora",
      src: Aurora,
      credit: "Aurora ",
    },
  ];

  return (
    <Carousel>
      {Video.map((video) => {
        return (
          <Carousel.Item key={video.id}>
            <ReactPlayer
              url={video.src}
              width="100%"
              height="100%"
              pip={true}
              controls={true}
              playing={true}
            />
            <Carousel.Caption>
              <div className="text-start margin d-flex flex-wrap flex-column">
                <h3 className=" text">Сансар судлал</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
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
        );
      })}
    </Carousel>
  );
}

export default Videocar;
