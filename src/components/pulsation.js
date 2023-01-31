import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img1 from "../images/Pulsation_Spectr/20151219_IAR.jpg";
import img2 from "../images/Pulsation_Spectr/20151220_IAR.jpg";
import img3 from "../images/Pulsation_Spectr/20151221_IAR.jpg";
import img4 from "../images/Pulsation_Spectr/20151222_IAR.jpg";
import img5 from "../images/Pulsation_Spectr/20151223_IAR.jpg";
import img6 from "../images/Pulsation_Spectr/20151224_IAR.jpg";
import img7 from "../images/Pulsation_Spectr/20151225_IAR.jpg";
import img8 from "../images/Pulsation_Spectr/20151226_IAR.jpg";

const fadeImages = [
  {
    url: img1,
    caption: "2015-12-19",
  },
  {
    url: img2,
    caption: "2015-12-20",
  },
  {
    url: img3,
    caption: "2015-12-21",
  },
  {
    url: img4,
    caption: "2015-12-22",
  },
  {
    url: img5,
    caption: "2015-12-23",
  },
  {
    url: img6,
    caption: "2015-12-24",
  },
  {
    url: img7,
    caption: "2015-12-25",
  },
  {
    url: img8,
    caption: "2015-12-26",
  },
];

export const Pulsation = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            key={index}
          >
            <img style={{ width: "60%" }} src={fadeImage.url} />
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  );
};
