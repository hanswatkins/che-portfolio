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
            style={{
              marginTop: '4rem',
              height: '80vh',
              position: 'center',
              boxShadow: '9px 10px 48px 0px rgba(0,0,0,0.48)',
            }}
            src={Pic1}
            alt='First slide'
          />
          <Carousel.Caption style={{ color: 'white' }}>
            <h3>Title</h3>
            <p>Dimensions</p>
            <p>Date of creation</p>
            <p>Story behind the piece</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{
              marginTop: '4rem',
              height: '80vh',
              position: 'center',
              boxShadow: '9px 10px 48px 0px rgba(0,0,0,0.48)',
            }}
            src={Pic2}
            alt='Second slide'
          />
          <Carousel.Caption style={{ color: 'white' }}>
            <h3>Title</h3>
            <p>Dimensions</p>
            <p>Date of creation</p>
            <p>Story behind the piece</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{
              marginTop: '4rem',
              height: '80vh',
              position: 'center',
              boxShadow: '9px 10px 48px 0px rgba(0,0,0,0.48)',
            }}
            src={Pic3}
            alt='Third slide'
          />
          <Carousel.Caption style={{ color: 'white' }}>
            <h3>Title</h3>
            <p>Dimensions</p>
            <p>Date of creation</p>
            <p>Story behind the piece</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImgCarousel;
