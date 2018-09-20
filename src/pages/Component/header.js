import React, { Component } from "react";
import {Navbar, Nav, NavItem, } from 'react-bootstrap';
import '../../App.css';

export default class header extends Component{
    render(){
        return(
            <Navbar inverse collapseOnSelect style={{marginBottom:0, border:0, backgroundColor:"#397011 "}} width="100%" height="100"  >
             <Navbar.Header>
              <Navbar.Brand>
               <a href="#brand">LOGO BM3</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1} href="#">
                    HOME
                </NavItem>
                <NavItem eventKey={2} href="#">
                    Mading
                </NavItem>
                <NavItem eventKey={3} href="#">
                    News
                </NavItem>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">
                  About Us
                </NavItem>
                <NavItem eventKey={2} href="#">
                  Profile
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          
        )
    }
}