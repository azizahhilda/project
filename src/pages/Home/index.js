import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Carousel,Image} from 'react-bootstrap'
import Header from '../Component/header'
import { Card, CardImg, CardTitle, CardText, CardBody, Row, Col, ButtonToolbar,NavItem,padding, fontSize, fontStyle } from 'reactstrap'
import Footer from '../Component/footer'
import {} from '../../App.css'
import Lidya from '../../assets/img/PicsArt_09-28-09.27.07.jpg'
import Hilda from '../../assets/img/IMG_20180905_123411.jpg'
import Adella from '../../assets/img/IMG_20180414_161248.jpg'
import Laura from '../../assets/img/PhotoGrid_1538016457757.jpg' 

const { Meta } = Card;

export default class Home extends Component{  

  render(){
        return(
          <div>
            <Header/>
            <Carousel style={{marginBottom:0, border:0}}>
              <Carousel.Item>
                  <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" width="100%"/>
                <Carousel.Caption>
                  <center>
                  <h1><b>HAI:)</b></h1>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </center>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                  <img src="https://www.w3schools.com/howto/img_lights_wide.jpg" width="100%"/>
                <Carousel.Caption>
                  <h3><b>SMK BINA MANDIRI MULTIMEDIA</b></h3>
                  <p>Sekolah yang sangat indah dan megahhhhh:)</p>
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
              <div style={{ marginBottom:20, paddingTop:"30px", color:"#000", fontSize:"30px", fontFamily:"Lucida Fax"}}>
                {/* <center> */}
                  <p><b>Developers</b></p>
                  {/* </center>  */}
                  
                <Row>
                  <Col sm="3">
                    <div style={{borderRadius:5}}>
                      <Card className="cardHome" style={{borderColor: "#000"}}>
                        <center>
                          <Image top style={{borderRadius:10, alignSelf:'center'}} width="50%" src={Adella}/>
                        </center>
                        <CardBody>
                          <center style={{paddingTop:10}}>
                            <CardTitle style={{fontSize:"18px"}}><b>Adella Surya Ananda</b></CardTitle>
                            <CardText style={{fontSize:"16px"}}>Back-End Engineer</CardText>
                            <CardText style={{paddingLeft: 20, paddingRight:20, color:"#7f8c8d", paddingBottom:15, fontSize:"15px"}}>
                            “Tersenyumlah, karena bisa jadi dengan senyumanmu banyak orang lain yang ikut tersenyum sama sepertimu.”
                            </CardText>
                          </center>
                        </CardBody>
                      </Card>
                    </div>
                  </Col>

                  <Col sm="3">
                    <div style={{borderRadius:5}}>
                      <Card className="cardHome" style={{borderColor: "#000"}} >
                        <center>
                          <Image top style={{borderRadius:10, alignSelf:'center'}} width="50%" src={Hilda}/>
                        </center>
                        <CardBody>
                          <center style={{paddingTop:10}}>
                            <CardTitle style={{fontSize:"18px"}}><b>Hilda Wahyu Azizah</b></CardTitle>
                            <CardText style={{fontSize:"16px"}}>Front-End Engineer</CardText>
                            <CardText style={{paddingLeft: 20, paddingRight:20, color:"#7f8c8d", paddingBottom:15, fontSize:"15px"}}>
                            “Jadilah pemaaf, yakni memaafkan diri sendiri lalu memberikan pemaafan yang besar pada orang lain.”
                            </CardText>
                          </center>
                        </CardBody>
                      </Card>
                    </div>
                  </Col>

                  <Col sm="3">
                    <div style={{ borderRadius:5 }}>
                      <Card className="cardHome" style={{borderColor: "#000"}} width="50%">
                        <center>
                          <Image top style={{borderRadius:10, alignSelf:'center'}} width="50%" height="80%" src={Laura}/>
                        </center>
                        <CardBody>
                          <center style={{paddingTop:2}}>
                            <CardTitle style={{fontSize:"18px"}}><b>Laura Purba</b></CardTitle>
                            <CardText style={{fontSize:"16px"}}>Back-End-End Engineer</CardText>
                            <CardText style={{paddingLeft: 20, paddingRight:20, color:"#7f8c8d", paddingBottom:15, fontSize:"15px"}}>
                            “Menunggu adalah suatu hal yang sangat sulit, namun cinta yang hebat mampu melaluinya.”
                            </CardText>
                          </center>
                        </CardBody>
                      </Card>
                    </div>
                  </Col>

                  <Col sm="3">
                    <div style={{ borderRadius:5}}>
                      <Card className="cardHome" style={{borderColor: "#000"}} width="50%">
                        <center>
                          <Image top style={{ borderRadius:10 ,alignSelf:'center'}} width="50%" src={Lidya}/>
                        </center>
                        <CardBody>
                          <center style={{paddingTop:5}}>
                            <CardTitle style={{fontSize:"18px"}}><b>Lidya Putri Agustina</b></CardTitle>
                            <CardText style={{fontSize:"16px"}}>Front-End Engineer</CardText>
                            <CardText style={{paddingLeft: 20, paddingRight:20, color:"#7f8c8d", paddingBottom:15, fontSize:"15px"}}>
                            "Hidup hanya sekali, lakukanlah yang terbaik, usaha yang maksimal dan buat bahagia semua orang”
                            </CardText>
                          </center>
                        </CardBody>
                      </Card>
                    </div>
                  </Col>
                </Row>
                
                  <center>
                    <div style={{fontSize:15, border:"1px", height:"30px", width:"90px" , backgroundColor:"#fff", paddingTop:20 }} >
                      <Link to="/AboutUs">
                        <p style={{color:"#0984e3"}}>View More </p>
                      </Link>
                    </div>
                  </center>
              </div>

              <div style={{ marginBottom:20, paddingTop:"30px", color:"#000", fontSize:"30px", fontFamily:"Lucida Fax"}}>
                {/* <center> */}
                  <p><b>Location</b></p>
                  {/* </center>  */}
              </div>
                <Row>
                  <Col sm="6">
                    <center>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4274.097448817836!2d106.96434953543948!3d-6.40617399170647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69945a114fd669%3A0x7197a19f0dfdd78d!2sSmk+Bina+Mandiri+Multimedia+Cileungsi!5e0!3m2!1sid!2sid!4v1537340537615" width="100%" height="450" frameborder="0" style={{paddingBottom:30}} allowfullscreen></iframe>
                    </center>
                  </Col>

                  <Col sm="6">
                    <div style={{
                        borderRadius:10,
                        backgroundColor: "#fff",
                        border:"1px solid #ccc",
                        borderWidth: "1px",
                        height: 420,
                        width:"100%",
                        alignItems: 'center'
                    }}>
                      <Col sm="6" style={{height:210, paddingTop:10}}>
                        <center>
                          <Image src="http://smkbinamandirimultimedia.sch.id/download/file/LogoSMK.jpg" width="180px" height="200px"/>
                        </center>
                      </Col>

                      <Col sm="6" style={{height:210, backgroundColor:"#fff", fontSize:"15px", paddingTop:10}}>
                        <center>
                          <p><b>SMK BINA MANDIRI MULTIMEDIA</b> </p>
                        </center>
                        <p>Jl. Raya Jonggol - Cileungsi KM.1 No.16, Cileungsi Kidul, Cileungsi, Bogor, Jawa Barat 16820</p>
                          <p><b> Contact Us: </b></p>
                          <p>Website : smkbinamandiri.sch.id</p>
                          <p>No.Tlp : (021) 82491984</p>  
                      </Col>

                      <Col sm="6" style={{backgroundColor:"#fff" , width:"100%", marginTop:"10px", paddingTop:10}}>
                        <center>
                          <Image src="https://smk.topkarir.com/assets/images/logo/smk/smk_header_new.png" height="130px" width="420px" />
                        </center>
                      </Col>

                    </div>
                  </Col>

                </Row>
              </div>
            <Footer/> 
          </div>

        )
    } 
}