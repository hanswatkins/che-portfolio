import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Navbar.Brand className='nav-logo' href='#home'>
            CHE.
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            {/* <Link to='/' style={{ textDecoration: 'none' }}>
              <Nav.Link href='#art'>Art</Nav.Link>
            </Link> */}
            <Link to='/about' style={{ textDecoration: 'none' }}>
              <Nav.Link className='nav-text' href='#about'>
                About
              </Nav.Link>
            </Link>
            <Nav.Link
              className='nav-text'
              href='https://www.instagram.com/selftightld'
            >
              Follow{/* <i class='fa-brands fa-instagram'></i> */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
