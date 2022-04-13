import React, { Component } from 'react';
import "./style/home.css"
import { Col, Row, Carousel } from 'react-bootstrap';
import Footer from '../components/menu/footer.js'
import NavBar from '../components/menu/navbar.js';

function Home(props) {
  return (
    <>
      <Row><Col xs={12} md={12}><h1>ALKYA</h1></Col></Row>
      <Row><Col xs={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }}>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </Col></Row>
      <br />
      <Row>
        <Col xs={{ span: 2, offset: 1 }} md={{ span: 2, offset: 1 }}>
          <img src="/equipeacc.png" className='img-fluid rounded-circle' alt="" /></Col>
        <Col xs={{ span: 2, offset: 1 }} md={{ span: 2, offset: 1 }}>
          <img src="/equipeacc.png" className='img-fluid rounded-circle' alt="" /></Col>
        <Col xs={{ span: 2, offset: 1 }} md={{ span: 2, offset: 1 }}>
          <img src="/equipeacc.png" className='img-fluid rounded-circle' alt="" /></Col>
        <Col xs={{ span: 2, offset: 1 }} md={{ span: 2, offset: 1 }}>
           <img src="/equipeacc.png" className='img-fluid rounded-circle' alt="" /></Col>
      </Row>
      <br />
      <Row><Col xs={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }}>
        <Carousel   interval={null} fade={true}>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid  customImg"
              src="/Valorant.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-100 img-fluid  customImg"
              src="/lol.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid  customImg"
              src="/rocketleague.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid  customImg"
              src="/rainbowsiege.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
    <Footer/>
  </>
  );
}
export default Home;