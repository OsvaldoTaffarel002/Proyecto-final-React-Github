import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCircleUser} from '@fortawesome/free-regular-svg-icons'

function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-transparent">
      <Container className='container-header'>
        <Navbar.Toggle style={{color:"#ff8241", backgroundColor:"#fff"}} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className='header-navbar-left'>
            <Nav.Link href="" className='navlink-header'>Home</Nav.Link>
            <Nav.Link href="" className='navlink-header'>About Us</Nav.Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Servicio 1</NavDropdown.Item>
              <NavDropdown.Item href="">Servicio 2</NavDropdown.Item>
              <NavDropdown.Item href="">Servicio 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">Servicio Exclusivo</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="" className='navlink-header'>Contact us</Nav.Link>
            </div>
            <div className='header-navbar-right'>
            <Nav.Link href="" className='navlink-header'><FontAwesomeIcon icon={faUser} style={{marginRight:"10px"}}/>Login</Nav.Link>
            <Nav.Link href="" className='navlink-header'><FontAwesomeIcon icon={faCircleUser} style={{marginRight:"10px"}}/>Register</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { Header };