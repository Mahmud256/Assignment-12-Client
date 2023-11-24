import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../assets/home/b1.jpeg';
import img2 from '../../assets/home/b2.jpg';
import img3 from '../../assets/home/b3.jpeg';

const Banner = () => {
    const images = [img1, img2, img3];

    return (
        <Carousel autoPlay interval={5000} showThumbs={false} showArrows={true} infiniteLoop>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt="" />
                </div>
            ))}
        </Carousel>
    );
};

export default Banner;
