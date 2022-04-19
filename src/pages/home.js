import React from 'react';
import "./style/home.css"
import { Col, Row, Carousel } from 'react-bootstrap';
import Footer from '../components/menu/footer.js'
import NavBar from '../components/menu/navbar.js';
import TilesStaff from "../components/tiles/tilesstaff";

function Home(props) {

  const games = {
    RocketLeague: { 
      link: "http://localhost:1337/uploads/rocketleague_cb091ec5e2.jpg?updated_at=2022-04-19T09:41:41.612Z",
      alt: "Valorant image for Alkya"
    },
    LeagueOfLegend: {
      link: "http://localhost:1337/uploads/lol_6a042d98a5.jpg?updated_at=2022-04-19T09:40:52.841Z",
      alt: "League Of Legend image for Alkya"
    },
    RainbowSix: {
      link: "http://localhost:1337/uploads/rainbowsiege_997cfd11f4.jpg?updated_at=2022-04-19T09:40:57.873Z",
      alt: "RainbowSix image for Alkya"
    },
    Valorant: {
      link: "http://localhost:1337/uploads/Valorant_381ee9b450.png?updated_at=2022-04-19T09:40:47.315Z",
      alt: "Valorant image for Alkya"
    }
  }

  return (
    <>
      <NavBar />
      <Row><Col xs={12} md={12}><h1>ALKYA</h1></Col></Row>
      <Row><Col xs={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }}>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </Col></Row>
      <TilesStaff staff={props.staff} />
      <br />
      <Row><Col xs={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }}>
        <Carousel interval={null} fade={true}>
          <Carousel.Item>
            <img className="d-block w-100 img-fluid customImg" src={games.Valorant.link} alt={games.Valorant.alt} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 h-100 img-fluid customImg" src={games.LeagueOfLegend.link} alt={games.LeagueOfLegend.alt} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 img-fluid customImg" src={games.RocketLeague.link} alt={games.RocketLeague.alt} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 img-fluid  customImg" src={games.RainbowSix.link} alt={games.RainbowSix.alt} />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
    <Footer/>
  </>
  );
}
export default Home;