import React from 'react';
import "./style/home.css"
import { Col, Row, Carousel } from 'react-bootstrap';
import Footer from '../components/menu/footer.js'
import NavBar from '../components/menu/navbar.js';
import TilesStaff from "../components/tiles/tilesstaff";
import { Link } from 'react-router-dom';

function Home(props) {

  return (
    <>
      <NavBar />

      <Row>
        <Col xs={12} md={12}>
          <h1>ALKYA</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }}>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Col>
      </Row>

      <h2>staff</h2>
      <Row>
        {props.staff.data?.map((staff, i) => (
          <Col key={i} xs={3} md={3} lg={3}>
            <TilesStaff key={i} staff={staff} />
          </Col>
        ))}
      </Row>

      {/* <h2>nos équipes</h2>
       <Row>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }}>
          <Carousel interval={null} fade={true}>
            {Object.keys(games).map((game, i) => (
              <Carousel.Item key={i}>
                <img className="d-block w-100 img-fluid customImg" src={games.link} alt={games.alt} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row> 
      <Link to="/mainteams"> toutes nos équipes </Link> */}

      <h2>dernières actualités</h2>
      {/* <Row>
        {props.news.data?.map((news, i) => (
          i < 1 ? console.log('oui') : console.log('non')
        ))}
      </Row> */}
    
      <Footer/>
    </>
  );
}
export default Home;