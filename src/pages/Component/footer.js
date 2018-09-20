import React, { Component } from "react";
import {Navbar, Nav, NavItem, } from 'react-bootstrap'
import '../../App.css'

export default class Footer extends Component{
    render(){
        return(
            <Navbar inverse collapseOnSelect style={{marginBottom:0, border:0}} >
             <Navbar.Header>
              <Navbar.Brand>
               <a href="#brand">LOGO BM3</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#">
                    Mading online
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}