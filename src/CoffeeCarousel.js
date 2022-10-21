import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export const CoffeeCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="coffee-shop-3.jpg" alt="First slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="coffee-shop-2.jpg" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="coffee-shop-3.jpg" alt="Third slide"/>
      </Carousel.Item>
    </Carousel>
  );
}
