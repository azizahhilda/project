import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Carousel,Image,} from 'react-bootstrap'
import Header from '../Component/header'
import { Card, CardImg, CardTitle, CardText,Button,  ButtonToolbar, CardBody, Row, Col,padding, fontSize, fontStyle, Container } from 'reactstrap'
import Footer from '../Component/footer'
import axios from 'axios'
import {} from '../../App.css'

export default class Home extends Component{

    state={
        response: []
    }

    componentDidMount(){
        axios
            .get('https://madingbm3.herokuapp.com/api/v1/mading')
            .then(res => {
                this.setState({response: res.data})
            })
    }

    render(){
        return(
        <div>
            <Header/>
            <div style={{ marginBottom:20, paddingTop:"80px", color:"#000", fontSize:"30px", fontFamily:"Lucida Fax", backgroundColor:"#A2C523"}}>
                <center>
                    <p style={{color: '#fff', alignSelf: 'center', paddingBottom:20}}>Mading SMK Bina Mandiri Multimedia</p>
                </center>
            </div>
            <div>
            <Container>
            <Row>
                {this.state.response.map(res => (
                    <Col sm="3">
                        <Card  className="cardMadding">
                            <CardImg src={res.images_url} style={{width:263, height:200}}/>    
                            <CardText style={{padding:8}}>
                            <Link to="/ReadMading">
                                <h4 style={{marginBottom:10,fontWeight:"Bold", color:"#000"}}>{res.title}</h4>
                            </Link>
                            
                            <p style={{color:"#000", fontSize: 16}}>{res.content ? res.content.slice(0, 25) : res.content}</p>
                            <Link to={`/ReadMading/${res.id}`}>
                                <p style={{color:"#0984e3", fontSize: 16}}>Read More</p>
                            </Link>
                            </CardText>
                        </Card>
                    </Col>
                ))}
            </Row>
            </Container>
            </div>
            <Footer/>
        </div>

        )
    }
}