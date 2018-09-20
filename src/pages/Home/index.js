import React, { Component } from "react";
import {  } from 'react-router-dom'
import { Carousel} from 'react-bootstrap'
import Header from '../Component/header'
import { Card, CardImg, CardTitle, CardText, CardBody, Row, Col } from 'reactstrap'
import Footer from '../Component/footer'

export default class Home extends Component{
    render(){
        return(
          <div>
                <Header/>
            <Carousel style={{marginBottom:20, border:0}}>
            <Carousel.Item>
                <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" width="100%"/>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://www.w3schools.com/howto/img_lights_wide.jpg" width="100%"/>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://www.w3schools.com/howto/img_mountains_wide.jpg" width="100%" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            <div style={{backgroundColor:"#397011", marginBottom:20}}>
           <center>
             <p><b>ABOUT US</b></p>
             </center> 
             </div>
            <Row>
              <Col sm="3">
              <Card>
                <CardImg top width="100%" src="https://cdn.idntimes.com/content-images/post/20171107/20838512-715174301991067-7577367060938752000-n-77bcbb64b753c6710e136a703e735dc6_600x400.jpg" />
                <CardBody>
                  <center>
                  <CardTitle><b>ADELLA</b></CardTitle>
                  <CardText>Back End</CardText>
                  </center>
                </CardBody>
              </Card>
              </Col>

              <Col sm="3">
              <Card>
                <CardImg top width="100%" src="https://cdn.idntimes.com/content-images/post/20171107/20838512-715174301991067-7577367060938752000-n-77bcbb64b753c6710e136a703e735dc6_600x400.jpg" />
                <CardBody>
                  <center>
                    <CardTitle><b>HILDA</b></CardTitle>
                  <CardText>Front End</CardText>
                    </center>
                </CardBody>
              </Card>
              </Col>

              <Col sm="3">
              <Card>
                <CardImg top width="100%" src="https://cdn.idntimes.com/content-images/post/20171107/20838512-715174301991067-7577367060938752000-n-77bcbb64b753c6710e136a703e735dc6_600x400.jpg" />
                <CardBody>
                  <center>
                  <CardTitle><b>LAURA</b></CardTitle>
                  <CardText>Back End</CardText>
                  </center>
                </CardBody>
              </Card>
              </Col>

              <Col sm="3">
              <Card>
                <CardImg top width="100%" src="https://cdn.idntimes.com/content-images/post/20171107/20838512-715174301991067-7577367060938752000-n-77bcbb64b753c6710e136a703e735dc6_600x400.jpg" />
                <CardBody>
                  <center>
                    <CardTitle><b>LIDYA</b></CardTitle>
                  <CardText>Front End</CardText>
                    </center>
                </CardBody>
              </Card>
              </Col>
            </Row>
            <div style={{backgroundColor:"#397011", marginBottom:20}}>
           <center>
             <p><b>LOCATION</b></p>
             </center> 
             </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4274.097448817836!2d106.96434953543948!3d-6.40617399170647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69945a114fd669%3A0x7197a19f0dfdd78d!2sSmk+Bina+Mandiri+Multimedia+Cileungsi!5e0!3m2!1sid!2sid!4v1537340537615" width="100%" height="500" frameborder="0" allowfullscreen></iframe>
            <Footer/>
          </div>

        )
    } 
}