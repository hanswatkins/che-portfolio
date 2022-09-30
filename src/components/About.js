import React from 'react';
import che from '../pictures/che.jpg';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <div>
      <Container style={{ marginTop: '5rem' }}>
        <Row>
          <Col></Col>
          <Col>
            <img
              src={che}
              alt='Portrait of Che'
              style={{
                width: '100%',
                boxShadow: '9px 10px 48px 0px rgba(0,0,0,0.48)',
              }}
            ></img>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col xs='2'></Col>
          <Col>
            <h1
              style={{
                marginTop: '2rem',
                fontFamily: 'VulfSansBlack',
              }}
            >
              Marche Rhyne
            </h1>
            <p
              style={{
                marginTop: '1rem',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum aliquam accumsan. Nullam turpis turpis, gravida vitae
              gravida nec, commodo sed nisl. Duis massa mi, vulputate ut magna
              in, faucibus molestie lectus. Praesent tortor arcu, pellentesque
              ac eleifend non, egestas non tortor. Aenean condimentum, velit ac
              sodales efficitur, purus nibh elementum lorem, a convallis magna
              tellus sit amet nisl. Vivamus bibendum nec massa quis consectetur.
              Aliquam vitae venenatis enim. Curabitur vehicula velit id diam
              luctus consectetur. Sed porta, enim sit amet maximus viverra, sem
              magna tristique odio, non feugiat leo velit in ante. Morbi
              vehicula, lorem eu ultrices fermentum, diam purus faucibus magna,
              malesuada gravida urna orci quis tortor.
            </p>
          </Col>
          <Col xs='2'></Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
