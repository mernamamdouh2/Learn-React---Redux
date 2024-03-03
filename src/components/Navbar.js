import { Container, Nav, Navbar } from 'react-bootstrap';

import React from 'react';

// import { Link } from 'react-router-dom';


const NavbarCollapse = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">React App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cards">Cards</Nav.Link>
            <Nav.Link href="/form">Form</Nav.Link>
            <Nav.Link href="/datesReminder">Dates Reminder P1</Nav.Link>
            <Nav.Link href="/questionAnswer">Question & Answer P2</Nav.Link>
            <Nav.Link href="/menuFood">Menu Food P3</Nav.Link>
            <Nav.Link href="/moviesDB">Movies DB P4</Nav.Link>
            
            <Nav.Link href="/redux">REDUX</Nav.Link>
            <Nav.Link href="/moviesDBRedux">Movies DB P1 Redux</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCollapse;