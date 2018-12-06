import React from 'react';
import logo from './png-trans.png'
import {NavLink} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
 
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
          <a href="http://localhost:3000/"><img src={logo} width="201" height="101"  alt="" /></a>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/">Noticias</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/teams">Equipos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/streams">Streams</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/patrocinadores">Patrocinadores</NavLink>
              </NavItem>
            
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}