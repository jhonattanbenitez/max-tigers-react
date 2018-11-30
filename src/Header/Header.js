import React from 'react';
import logo from './logoweb1.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <a href="http://localhost:3000/"><img src={logo} width="201" height="101" class="d-inline-block align-top" alt="" /></a>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Noticias</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Equipos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Streams</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Patrocinadores</NavLink>
              </NavItem>
            
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}