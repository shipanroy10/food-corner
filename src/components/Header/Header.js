import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, } from 'react-bootstrap';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
<Navbar fixed="top" collapseOnSelect expand="lg" bg="none" variant="dark">
<Navbar.Brand href="#home">
      <img
        src={logo}
        width="50"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
<Link to="/foods">Food Corner</Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
     
    
      <Link to="/home">Breakfast</Link>
    <Link to="/home">Launch</Link>
    <Link to="/home">Dinner</Link>
    <Link to="/home">Book</Link>
 
    </Nav>
    
    <Form inline>
    <Button variant="outline-info">Search</Button>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
     
      <Button variant="dark">Login</Button>
    </Form>
   
  </Navbar.Collapse>
</Navbar>
         
   
          
    
    );
};

export default Header;