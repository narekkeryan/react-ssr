import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, pathname: '/' };
  }

  componentDidMount() {
    this.setState({ pathname: location.pathname });
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handlePathnameChange = (e) => {
    this.setState({ pathname: e.target.pathname });
  };

  render() {
    const LinkComponent = this.props.hasError ? NavLink : Link;
    const pathname = this.state.pathname;

    return (
      <Navbar color="dark" dark expand="sm">
        <NavbarBrand tag={LinkComponent} to="/" href="/" onClick={this.handlePathnameChange}>React SSR</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={LinkComponent} to="/about" href="/about" active={pathname === '/about'} onClick={this.handlePathnameChange}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={LinkComponent} to="/contact" href="/contact" active={pathname === '/contact'} onClick={this.handlePathnameChange}>Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

Header.propTypes = {
  hasError: PropTypes.bool.isRequired,
};

export default Header;