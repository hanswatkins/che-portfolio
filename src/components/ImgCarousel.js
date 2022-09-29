import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Pic1 from '../pictures/1.jpg';
import Pic2 from '../pictures/2.jpg';
import Pic3 from '../pictures/3.jpg';

const ImgCarousel = () => {
  return (
    <div class='container'>
      <Carousel variant='dark'>
        <Carousel.Item>
          <img
            style={{ marginTop: '4rem', height: '80vh', position: 'center' }}
            src={Pic1}
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ marginTop: '4rem', height: '80vh', position: 'center' }}
            src={Pic2}
            alt='Second slide'
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ marginTop: '4rem', height: '80vh', position: 'center' }}
            src={Pic3}
            alt='Third slide'
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImgCarousel;
