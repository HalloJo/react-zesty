import React, {useState} from 'react';
import { Figure, Navigation, Button, NextArrow, PreviousArrow, Figcaption, Image } from './Slideshow.styles';
import Loader from "../Loader/Loader";
import cabbage from "../../assets/image1.jpeg";
import mango from "../../assets/image2.jpeg";
import fig from "../../assets/image3.jpeg";
import gaze from "../../assets/image4.jpeg";
import peach from "../../assets/image5.jpeg";
import avocado from "../../assets/image6.jpeg";
import { useEffect } from 'react';

const images = [cabbage, mango, fig, gaze, peach, avocado];

export const Slideshow = () => {
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

    useEffect(()=>{
        setInterval(()=> {
            handleClickNext()
        }, 3000)
    },[])

    return (
        <Figure>
        <Navigation>
            <Button className="back-button" onClick={handleClickPrevious}>
                <PreviousArrow />
            </Button>
            <Button className="next-button" onClick={handleClickNext}>
                <NextArrow />
            </Button>
        </Navigation>
        {numLoaded < images.length && (
            <Loader calculatedWidth={(numLoaded / images.length) * 100} />
        )}

        <Figcaption>
            {currentImage + 1} / {images.length}
        </Figcaption>
        {images.map((imageURL, index) => (
            <Image
            alt=""
            key={imageURL}
            src={imageURL}
            onLoad={handleImageLoad}
            className={currentImage === index ? "display" : "hide"}
            />
        ))}
        </Figure>
    )
}

export default Slideshow