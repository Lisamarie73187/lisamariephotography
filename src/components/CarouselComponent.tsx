import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const image = "https://lisamariephotography.s3.us-west-1.amazonaws.com/CrookedCreek-07-Edit.jpg"
const imageThree = "https://lisamariephotography.s3.us-west-1.amazonaws.com/CrookedCreek-10-Edit.jpg"
const imageTwo = "https://lisamariephotography.s3.us-west-1.amazonaws.com/BoiseGreenBelt-12.jpg"



export const CarouselComponent: React.FC = () =>  {

    return (
        <Carousel
            autoPlay
            centerMode
            centerSlidePercentage={70}
            infiniteLoop
            interval={4000}
            showArrows
            swipeable
            emulateTouch
            useKeyboardArrows
            transitionTime={2000}
            showThumbs={false}
        >
            <div className='carousel-item'>
                <img src={image} />
            </div>
            <div className='carousel-item'>
                <img src={imageTwo}/>
            </div>
            <div className='carousel-item'>
                <img src={imageThree}/>
            </div>
        </Carousel>
    );
};

