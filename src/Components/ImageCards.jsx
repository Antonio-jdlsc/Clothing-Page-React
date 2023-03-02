import React from 'react';
import Slider from 'react-slick';

function ImageCard({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image) => (
        <div key={image}>
          <img src={image} alt="" />
        </div>
      ))}
    </Slider>
  );
}

export default ImageCard;