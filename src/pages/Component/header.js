import React, { Component } from "react";
import {Navbar, Nav, NavItem, padding, fontSize,Image} from 'react-bootstrap';
import '../../App.css';
import '../../index.css';
import { Link } from 'react-router-dom'
// import logo from '../../assets/img/logo12.png'

export default class header extends Component{
    render(){
        return(
            <Navbar collapseOnSelect style={{ marginBottom:0, borderColor: "#397011", backgroundColor:"#397011 ", padding:"5px", fontSize:"20px"}} width="100%" height="100" fixedTop  >
                <Navbar.Header>
                    <Navbar.Brand>
                    {/* <a href="#brand"> <Image src={logo} style={{paddingRight:10}} height="40" width="150%"/> </a> */}
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
            <Navbar.Collapse>
            <div style={{ marginBottom:15, color:"#000", fontSize:"25px", fontFamily:"Open Sans"}}>
                <Nav>
                    <NavItem eventKey={1} href="#">
                    <Link to="/">Home</Link>
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                    <Link to="/Mading">Mading</Link>
                    </NavItem>
                    <NavItem eventKey={3} href="#">
                    <Link to="/Berita"> News</Link>
                    </NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                    <Link to="/AboutUs"> About Us</Link>
                    </NavItem>
                </Nav>
            </div>
                </Navbar.Collapse>
            </Navbar>
            
            )
        }
    }