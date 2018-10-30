import React, { Component } from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavBar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect fluid fixedTop>
      <Navbar.Header>
          <Navbar.Brand>
              <Link to="/">Aganith Software Solutions</Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
          <Nav pullRight>
              <NavItem eventKey={1}  componentClass={Link} href= "/" to="/">
                  Home
              </NavItem>
              <NavItem eventKey={2} componentClass={Link} href= "/Contact" to="/Contact">
                  Contact
              </NavItem>
              <NavItem eventKey={3} componentClass={Link} href="/Login" to="/Login">
                  Login
              </NavItem>
              <NavItem eventKey={4} componentClass={Link} href="/Form" to="/Form" >
                   Admin
               </NavItem>
          </Nav>
      </Navbar.Collapse>

      </Navbar>
        
      
    );
  }
}
