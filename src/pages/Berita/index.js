import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Carousel, Image, ProgressBar } from 'react-bootstrap'
import Header from '../Component/header'
import { Card, CardImg, CardTitle, ButtonToolbar, CardText, CardBody, Row, Col,padding, fontSize, fontStyle, Container, } from 'reactstrap'
import Footer from '../Component/footer'
import {} from '../../App.css'
import axios from 'axios'

export default class Berita extends Component{
  state = {
    response: []
    // {
    //   title: "Bencong ketangkep alien",
    //   img:"https://1.bp.blogspot.com/-k4aQyxAnoSU/W2aPWAltLSI/AAAAAAAAACk/jCu6_5MRlJEmn-5i_cMrLwt1S4t_04-AwCLcBGAs/w843/logo-rcti.png", 
    //   description: "Jakarta - Microsoft akan menjual tablet produksi sendiri yang bernama Surface. Beberapa mitra produsen PC kabarnya tak senang"
    // },
    // {
    //   title: "Bencong ketangkep polpp",
    //   img:"https://1.bp.blogspot.com/-k4aQyxAnoSU/W2aPWAltLSI/AAAAAAAAACk/jCu6_5MRlJEmn-5i_cMrLwt1S4t_04-AwCLcBGAs/w843/logo-rcti.png",
    //   description  : "Jakarta - Microsoft akan menjual tablet produksi sendiri yang bernama Surface. Beberapa mitra produsen PC kabarnya tak senang"
    // },
    // {
    //   title: "Bencong ketangkep Hansip",
    //   img: "http://3.bp.blogspot.com/-4UFDiqi_7ZI/UKw0a7I5-9I/AAAAAAAAAdI/L2-z6qIBxIg/s1600/file-logo-indosiar-cdr-free-corel-draw.jpg",
    //   description: "Jakarta - Microsoft akan menjual tablet produksi sendiri yang bernama Surface. Beberapa mitra produsen PC kabarnya tak senang"
    // },
    // {
    //   title: "Bencong ketangkep Brigadir",
    //   img:"https://1.bp.blogspot.com/-k4aQyxAnoSU/W2aPWAltLSI/AAAAAAAAACk/jCu6_5MRlJEmn-5i_cMrLwt1S4t_04-AwCLcBGAs/w843/logo-rcti.png",
    //   description: "Jakarta - Microsoft akan menjual tablet produksi sendiri yang bernama Surface. Beberapa mitra produsen PC kabarnya tak senang"
    // },
    // {
    //   title: "Bencong ketangkep Tentara",
    //   img: "https://3.bp.blogspot.com/-yQT4vvhyU4w/W3_0FKhctXI/AAAAAAAAIt8/b7JwrX4zcdcFdPjo1Q1qMbrmLRLct4yVQCLcBGAs/w843/logo-sctv.webp",
    //   description: "Jakarta - Microsoft akan menjual tablet produksi sendiri yang bernama Surface. Beberapa mitra produsen PC kabarnya tak senang"
    // },
    // {
    //   title: "Bencong ketangkep ",
    //   img: "https://www.nonton-tv.com/wp-content/uploads/2018/06/trans7-1.png",
    //   description: "Jakarta - Microsoft akan menjual tablet produksi sendiri yang bernama Surface. Beberapa mitra produsen PC kabarnya tak senang"
    // }
}

  async componentDidMount(){
      axios
        .get('https://madingbm3.herokuapp.com/api/v1/berita')
        .then(res => {
          this.setState({response: res.data})
        })
  }

            render(){
                return(
            <div>
                <Header/>
            <Carousel style={{marginBottom:0, border:0}}>
            <Carousel.Item>
                <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" width="100%"/>
              <Carousel.Caption>
                <center>
                <h1>HAI:)</h1>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </center>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://www.w3schools.com/howto/img_lights_wide.jpg" width="100%"/>
              <Carousel.Caption>
                <h3>SMK BINA MANDIRI MULTIMEDIA</h3>
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

            <div className="container">
                <div style={{ marginBottom:20, paddingTop:"10px", color:"#000", fontSize:"30px", fontFamily:"Lucida Fax", paddingLeft:10}}>
                <p><b>News</b></p>
            </div>
            <Row style={{paddingBottom:30}}>
              {this.state.response.map(res => (
                <Col sm="6">
                      <Card style={{padding:10, margin:10}} className="cardMadding" >
                        <Row>
                        <Col sm="5" >
                          <CardImg src={res.images_url} style={{width:200, height:185, paddingRight:-10, borderRadius: 5}}/>
                        </Col>
                        <Col sm="7">
                        <CardText>
                        <Link to="/ReadMore">
                          <h4 style={{marginBottom:10,fontWeight:"Bold", color:"#000"}}>{res.title}</h4>
                        </Link>
                        <p> {res.content ? res.content.slice(0, 255) : res.content} </p>
                        <Link to={`/ReadMore/${res.id}`}>
                          <p style={{color:"#0984e3", fontSize: 16}}>Read More</p>
                      </Link>
                        </CardText>
                        </Col>
                        </Row>
                      </Card>
                  </Col>
              ))}
            </Row>

            
            {/* <Col sm="6"  style={{paddingBottom:0, marginBottom:0}} className="cardMadding">
                  <Card>
                    <Row>
                    <Col sm="5">
                      <CardImg src="http://3.bp.blogspot.com/-4UFDiqi_7ZI/UKw0a7I5-9I/AAAAAAAAAdI/L2-z6qIBxIg/s1600/file-logo-indosiar-cdr-free-corel-draw.jpg" style={{width:200, height:185, paddingRight:-10}}/>                      
                    </Col>

                  <Col sm="7">
                  <CardText>
                  <h4 style={{marginBottom:10,fontWeight:"Bold",}}>Bencong ketangkep Hansip</h4>
                  <p>Jakarta - Microsoft akan menjual tablet produksi sendiri yang bernama Surface. Beberapa mitra produsen PC kabarnya tak senang</p>
                    <ButtonToolbar>
                    <button onClick={this.handleClick}>
                     Read More...
                    </button>
                    </ButtonToolbar>
                  </CardText>
                  </Col>
                  </Row>
                </Card>
                </Col>

            <Row>
                <Col sm="6" style={{paddingBottom:10}} className="cardMadding">
                  <Card>
                   <Col sm="5">
                    <CardImg src="http://3.bp.blogspot.com/-4UFDiqi_7ZI/UKw0a7I5-9I/AAAAAAAAAdI/L2-z6qIBxIg/s1600/file-logo-indosiar-cdr-free-corel-draw.jpg" style={{width:200, height:185, paddingRight:-10}}/>                      
                   </Col>

                  <Col sm="7" >
                  <CardText>
                  <h4 style={{marginBottom:10,fontWeight:"Bold"}}>Bencong ketangkep Hansip</h4>
                  <p>Jakarta - Microsoft akan menjual tablet produksi sendiri yang bernama Surface. Beberapa mitra produsen PC kabarnya tak senang</p>                
                  <ButtonToolbar>
                    <button onClick={this.handleClick}>
                     Read More...
                    </button>
                    </ButtonToolbar>
                  </CardText>
                  </Col>
                  </Card>
                </Col>  

                <Col sm="6" style={{paddingBottom:0, marginBottom:0}} className="cardMadding">
                <Card>
                <Col sm="5">
                    <CardImg src="https://upload.wikimedia.org/wikipedia/id/thumb/1/1f/Antv_logo_%282017%29.svg/1200px-Antv_logo_%282017%29.svg.png" style={{width:200, height:185, paddingRight:-10}}/>                      
                  </Col>

                  <Col sm="7">
                  <CardText>
                  <h4 style={{marginBottom:10,fontWeight:"Bold"}}>Bencong ketangkep Hansip</h4>
                  <p>Jakarta - Microsoft akan menjual tablet produksi sendiri yang bernama Surface. Beberapa mitra produsen PC kabarnya tak senang</p>
                 
                  <ButtonToolbar>
                    <button onClick={this.handleClick}>
                     Read More...
                    </button>
                    </ButtonToolbar>
                  </CardText>
                 
                  </Col>
                </Card>
                </Col>
            </Row>

            <Row>
                <Col sm="6" style={{paddingBottom:10} } className="cardMadding" >
                <Card>
                  <Col sm="5">
                    <CardImg src="https://www.nonton-tv.com/wp-content/uploads/2018/06/trans7-1.png" style={{width:200, height:185, paddingRight:-10}}/>                      
                  </Col>

                  <Col sm="7">
                  <CardText>
                  <h4 style={{marginBottom:10,fontWeight:"Bold"}}>Bencong ketangkep Hansip</h4>
                  <p>Jakarta - Microsoft akan menjual tablet produksi sendiri yang bernama Surface. Beberapa mitra produsen PC kabarnya tak senang</p>
                 
                    <ButtonToolbar>
                    <button onClick={this.handleClick}>
                     Read More...
                    </button>
                    </ButtonToolbar>
                  </CardText>
                  </Col>
                  </Card>
                </Col>  

                <Col sm="6"  style={{paddingBottom:0, marginBottom:0}} className="cardMadding">
                <Card>
                <Col sm="5">
                    <CardImg src="https://www.nonton-tv.com/wp-content/uploads/2018/06/net.png" style={{width:200,height:185, paddingRight:-10}}/>                      
                  </Col>

                  <Col sm="7">
                    <CardText>
                    <h4 style={{marginBottom:10,fontWeight:"Bold"}}>Bencong ketangkep Hansip</h4>
                    <p>Jakarta - Microsoft akan menjual tablet produksi sendiri yang bernama Surface. Beberapa mitra produsen PC kabarnya tak senang</p>
                 
                    <ButtonToolbar>
                    <button onClick={this.handleClick}>
                     Read More...
                    </button>
                    </ButtonToolbar>
                    </CardText>
                  </Col>
                </Card> */}
                {/* </Col> */}
            {/* </Row> */}
            </div>
            <div style={{}}>
            <Footer/>
            </div>
            </div>
        )
    }
}