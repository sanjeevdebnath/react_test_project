import React from 'react';
import {Navbar, Nav, Form, Button}  from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../../giphy.gif'
// import {Nav, Bars, NavBtn, NavBtnLink, NavLink, NavMenu} from './NavbarElements';

const SiteNavbar = () => {
    return (
        <>
            {/* <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to='/home' activeStyle>Home</NavLink>
                    <NavLink to='/about' activeStyle>About</NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav> */}
            <Navbar bg="primary" variant="dark">
            {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                <Navbar.Brand href="/home">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt=""
                    />
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                <Form inline>
                    {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                    <LinkContainer to="/signin">
                        <Button variant="outline-light">Sign In</Button>
                    </LinkContainer>
                    
                </Form> 
            </Navbar>
        </>
    );
};

export default SiteNavbar;