import React, { useState } from "react";
import "../Slideshow/Slideshow.css";
import Loader from "../Loader/Loader";
import cabbage from "../../assets/image1.jpeg";
import mango from "../../assets/image2.jpeg";
import fig from "../../assets/image3.jpeg";
import gaze from "../../assets/image4.jpeg";
import peach from "../../assets/image5.jpeg";
import avocado from "../../assets/image6.jpeg";

const images = [cabbage, mango, fig, gaze, peach, avocado];

const Slideshow = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [numLoaded, setNumLoaded] = useState(0);
  const length = images.length - 1;

  const handleClickNext = () => {
    setCurrentImage((currentImage) => {
      return currentImage < length ? currentImage + 1 : 0;
    });
  };
  const handleClickPrevious = () => {
    setCurrentImage((currentImage) => {
      return currentImage === 0 ? length : currentImage - 1;
    });
  };

  const handleImageLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1);
  };

  return (
    <figure>
      <nav>
        <button className="back-button" onClick={handleClickPrevious}>
          <svg
            width="42"
            height="60"
            viewBox="0 0 42 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.57749e-07 29.9998C3.76103e-07 28.4606 0.708885 27.0072 1.92178 26.0597L33.9218 1.05966C36.0978 -0.640396 39.2401 -0.254509 40.9401 1.92156C42.6402 4.09763 42.2543 7.23985 40.0782 8.9399L13.1216 29.9998L40.0782 51.0597C42.2543 52.7597 42.6402 55.9019 40.9401 58.078C39.2401 60.2541 36.0978 60.64 33.9218 58.9399L1.92178 33.9399C0.708885 32.9923 3.39395e-07 31.5389 3.57749e-07 29.9998Z"
              fill="#E8E8E8"
            />
          </svg>
        </button>
        <button className="next-button" onClick={handleClickNext}>
          <svg
            width="42"
            height="60"
            viewBox="0 0 42 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42 30.0002C42 31.5394 41.2911 32.9928 40.0782 33.9403L8.07822 58.9403C5.90215 60.6404 2.75993 60.2545 1.05988 58.0784C-0.640177 55.9024 -0.25429 52.7602 1.92178 51.0601L28.8784 30.0002L1.92178 8.94034C-0.254288 7.24029 -0.640175 4.09807 1.05988 1.922C2.75993 -0.254069 5.90215 -0.639955 8.07822 1.0601L40.0782 26.0601C41.2911 27.0077 42 28.4611 42 30.0002Z"
              fill="#E8E8E8"
            />
          </svg>
        </button>
      </nav>
      {numLoaded < images.length && (
        <Loader calculatedWidth={(numLoaded / images.length) * 100} />
      )}

      <figcaption>
        {currentImage + 1} / {images.length}
      </figcaption>
      {images.map((imageURL, index) => (
        <img
          alt=""
          key={imageURL}
          src={imageURL}
          onLoad={handleImageLoad}
          className={currentImage === index ? "display" : "hide"}
        />
      ))}
    </figure>
  );
};

export default Slideshow;
