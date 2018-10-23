import React, { Component } from "react";
import { } from 'react-router-dom'
import { Carousel,Image} from 'react-bootstrap'
import Header from '../Component/header'
import {Card, CardImg, CardTitle, CardText,Button,  ButtonToolbar, CardBody, Row, Col,padding, fontSize, fontStyle, Container} from 'reactstrap'
import Footer from '../Component/footer'
import {} from '../../App.css'
import Lidya from '../../assets/img/PicsArt_09-28-09.27.07.jpg'
import Hilda from '../../assets/img/IMG_20180905_123411.jpg'
import Adella from '../../assets/img/IMG_20180414_161248.jpg'
import Laura from '../../assets/img/PhotoGrid_1538016457757.jpg'

export default class Home extends Component{
    render(){
        return(
            <div>
                <Header/>
                    <div style={{ marginBottom:20, color:"#000", fontSize:"30px", fontFamily:"Lucida Fax"}}>
                        <div className="images">
                            <h3 style={{textAlign:"center",fontWeight:"bold",}}>Welcome About Us</h3>
                        </div>
                    </div>
                    <Container>
                        <p style={{paddingBottom:10}}><h1><b>About Us</b></h1></p>
                            <p style={{fontSize:"18px"}}><h3>Assalamu'alaikum Wr.Wb</h3>
                            Teknologi informasi merupakan teknologi yang membantu manusia untuk membuat, mengubah, menyimpan, dan mengomunikasikan atau 
                            menyebarkan informasi. Dengan berkembangnya IT secara terus-menerus, membuat kita harus mengetahui informasi yang sedang trending.
                            SMK Bina Mandiri Multimedia merupakan sekolah berbasis IT, sebagai siswa kita dituntut untuk selalu update tentang informasi terbaru dari
                            dunia IT maupun dunia teknologi lainnya dan sebagai siswa kita pun tidak boleh ketinggalan berita seputaran sekolah kita. Oleh karena itu 
                            kami termotivasi untuk membuat website mading untuk sekolah kami yang bernama BMWalls. Didalam web ini kalian dapat melihat dan mengetahui 
                            informasi terbaru seputar sekolah SMK Bina Mandiri Multimedia maupun informasi mengenai teknologi IT. Kami membuat web ini untuk memudahkan para 
                            siswa-siswi BM3 untuk mendapatkan informasi terupdate tentang perkembangan teknologi. Web ini dibuat dengan sangat menarik agar dapat menambah minat
                            baca siswa dan dapat memberikan motivasi. Kalian juga dapat mengetahui kegiatan yang ada di SMK Bina Mandiri Multimedia. Semoga website ini dapat bermanfaat
                            bagi kalian:)  
                            </p>
                    </Container>

                <div className="container">
                    <div style={{ marginBottom:20, paddingTop:"20px", color:"#000", fontSize:"30px", fontFamily:"Lucida Fax"}}>
                        {/* <center> */}
                            <p><b>Developers</b></p>
                            {/* </center>  */}
                    </div>
                </div>

                <div className="container">
                    <Row style={{paddingBottom:30}}>
                        <Card style={{paddingBottom:0, margin:0}} className="cardMadding" >
                            <Row>
                                <Col sm="3">
                                    <Image top style={{alignSelf:'center'}} width="60%" src={Adella}/>                      
                                </Col>

                                <Col sm="9">
                                    <CardText>
                                    <h4 style={{marginBottom:10,fontWeight:"Bold"}}>Adella Surya Ananda</h4>
                                        <ul>
                                            Tempat, Tanggal, Lahir : Bogor, 8 Desember 2001
                                        </ul>
                                        <ul>
                                            Alamat : Metland Cileungsi
                                        </ul>
                                        <ul>
                                            Umur : 16
                                        </ul>
                                        <ul>
                                            Whatsapp : 083****
                                        </ul>
                                        <ul>
                                            Instagram : @chim_dsa
                                        </ul>
                                    </CardText> 
                                </Col>
                            </Row>
                        </Card>
                    </Row>

                    <Row style={{paddingBottom:30}}>
                        <Card style={{paddingBottom:0, margin:0}} className="cardMadding" >
                            <Row>
                                <Col sm="3" >
                                    <Image top style={{ alignSelf:'center'}} width="60%" src={Hilda}/>                      
                                </Col>

                                <Col sm="9">
                                    <CardText>
                                        <h4 style={{marginBottom:10,fontWeight:"Bold"}}>Hilda Wahyu Azizah</h4>
                                        <ul>
                                            Tempat, Tanggal, Lahir : Bogor, 16 September 2002
                                        </ul>
                                        <ul>
                                            Alamat : Klapanunggal
                                        </ul>
                                        <ul>
                                            Umur : 16
                                        </ul>
                                        <ul>
                                            Whatsapp : 08381187536
                                        </ul>
                                        <ul>
                                            Instagram : @hldaaa16_
                                        </ul>
                                    </CardText>
                                </Col>
                            </Row>
                        </Card>
                    </Row>

                    <Row style={{paddingBottom:30}}>
                        <Card style={{paddingBottom:0, margin:0}} className="cardMadding" >
                            <Row>
                                <Col sm="3" >
                                    <Image top style={{ alignSelf:'center'}} width="60%" src={Laura}/>                      
                                </Col>

                                <Col sm="9">
                                    <CardText>
                                        <h4 style={{marginBottom:10,fontWeight:"Bold"}}>Laura Purba</h4>
                                        <ul>
                                            Tempat, Tanggal, Lahir : Bekasi, 27 November 2001
                                        </ul>
                                        <ul>
                                            Alamat : Samping JS:)
                                        </ul>
                                        <ul>
                                            Umur : 16
                                        </ul>
                                        <ul>
                                            Whatsapp : 083****
                                        </ul>
                                        <ul>
                                            Instagram : @lauracila_
                                        </ul>   
                                    </CardText>
                                </Col>
                            </Row>
                        </Card>
                    </Row>

                    <Row style={{paddingBottom:30}}>
                        <Card style={{paddingBottom:0, margin:0}} className="cardMadding" >
                            <Row>
                                <Col sm="3" >
                                    <Image top style={{ alignSelf:'center'}} width="60%" src={Lidya}/>                      
                                </Col>

                                <Col sm="9">
                                    <CardText>
                                        <h4 style={{marginBottom:10,fontWeight:"Bold"}}>Lidya Putri Agustina</h4>
                                        <ul>
                                            Tempat, Tanggal, Lahir : Medan, 16 Agustus 2001
                                        </ul>
                                        <ul>
                                            Alamat : Samping JS
                                        </ul>
                                        <ul>
                                            Umur : 17
                                        </ul>
                                        <ul>
                                            Whatsapp : 083****
                                        </ul>
                                        <ul>
                                            Instagram : @lidyaputri_agustina
                                        </ul>
                                    </CardText>
                                </Col>
                            </Row>
                        </Card>
                    </Row>
                </div>
                <Footer/>
            </div>
        )
    }
}