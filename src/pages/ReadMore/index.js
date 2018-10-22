import React, { Component } from "react";
import { Link } from 'react-router-dom'
import {Image} from 'react-bootstrap'
import Header from '../Component/header'
import Footer from '../Component/footer'
import {} from '../../App.css'
import { Container, Row, Col } from "reactstrap";
import axios from 'axios'
import moment from 'moment'

export default class readBerita extends Component{

    state = {
        response: []
    }

    componentDidMount(){
        axios
            .get(`https://madingbm3.herokuapp.com/api/v1/berita/${this.props.match.params.id}`)
            .then(res => {
                this.setState({response: res.data[0]})
            })
    }

    render(){
        {console.log(this.props.match.params.id)}
        {console.log(this.state.response)}
        return(
            <div>
                <Header/>
                <div>
                    <Image src={this.state.response.images_url} width="100%" height="600px"/>
                </div>
                <Container>
                    <Row>
                        <Col>
                            <div style={{alignItems:'center', justifyContent:'center', padding:10}}>
                                <h1 style={{fontFamily: 'Open Sans', alignSelf:'center'}}> {this.state.response.title} </h1>
                                <h4>Posted at {moment(this.state.response.create_at).subtract(1, 'days').calendar()}</h4>
                            </div>
                            <p className="TextReadMore" >
                                {this.state.response.content}
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </div>
        )
    }
}