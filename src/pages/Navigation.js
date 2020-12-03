import React from "react";
import { Navbar, Nav, Form, Container, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">XYZ Restaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav  inline>
            <Button  href="/login" className="mr-3" variant="outline-primary">Login</Button >
            
            <Button  href="/register" variant="outline-success">Register</Button >
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );  
}

export default Navigation;