import React, { Component } from "react";
import {Navbar, Nav, NavItem, fontSize, Image } from 'react-bootstrap'
import '../../App.css'
import { Container } from "reactstrap";

export default class Footer extends Component{
    render(){
        return(
          <div style={{
            fontSize:"20px",
            borderRadius:0,
            backgroundColor: "#2B2B2B",
            border:"0px solid #fff",
            height: 40,
            width:"100%",
          }}>
          <Container>
          <p style={{textAlign:"center", color:"#fff"}}> Copyright&copy;2018</p>
          </Container>
          </div>
        )
    }
}