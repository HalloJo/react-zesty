import React, { useState } from "react";
import "./App.css";
import cabbage from "./assets/image1.jpeg";
import mango from "./assets/image2.jpeg";
import fig from "./assets/image3.jpeg";
import gaze from "./assets/image4.jpeg";
import peach from "./assets/image5.jpeg";
import avocado from "./assets/image6.jpeg";

const images = [cabbage, mango, fig, gaze, peach, avocado];

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleClick = () => {
    const length = images.length - 1;
    setCurrentImage((currentImage) => {
      return currentImage < length ? currentImage + 1 : 0;
    });
  };

  return (
    <section className="App">
      <header className="title">
        <h1>Zesty</h1>
        <p>
          A photography project <br /> by Ella Fieldling
        </p>
      </header>
      <figure>
        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>
        <img alt="" src={images[currentImage]} onClick={handleClick} />
      </figure>
    </section>
  );
};

export default App;
