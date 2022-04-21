import React, { Component } from 'react';
import "./style/home.css"
import { Col, Row, Carousel, Container } from 'react-bootstrap';
import Footer from '../components/menu/footer.js'
import NavBar from '../components/menu/navbar.js';
import TilesStaff from "../components/tiles/tilesstaff";
import { Link } from 'react-router-dom';
import TilesNews from '../components/tiles/tilesnews';

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      games: []
    }
  }

  componentDidMount = async () => {

    const reponse = await fetch('http://localhost:1337/api/games?populate=*', { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    const fetchGames = await reponse.json()

    this.setState({
      games: fetchGames
    })
  }

  render() {
    return (
      <>
        <NavBar /> {/* ../components/menu/navbar.js */}
        

        <Container>
          <Row>
            <Col xs={12} md={12}>
              <h1>ALKYA</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} xl={{ span: 10, offset: 1 }}>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            {this.props.staff.data?.map((staff, i) => ( // maping every staff member in DB 
              <Col className='staff-home' key={i} xs={{ span: 6 }} md={{ span: 4 }} lg={{ span: 2}}>
                <TilesStaff key={i} staff={staff} /> {/* ../components/tiles/tilesstaff.js */}
              </Col>
            ))}
          </Row>
        </Container>


        <h2>nos équipes</h2>
        <Container>
          <Row>
            <Col xs={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }}>
              <Carousel interval={null} fade={true} className='customImg'>
                {this.state.games.data?.map((game, i) => ( // maping every carousel image and its alt from DB
                  <Carousel.Item key={i}>
                    <img className="d-block w-100 img-fluid customImg" src={"http://localhost:1337" + game.attributes.image.data.attributes.url} alt={game.alt} />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
        <Link to="/mainteam"><h3 className="hoverlink">toutes nos équipes</h3></Link>

        <h2 >dernières actualités</h2>
        <Container>
          <Row>
            {this.props.news.data?.map((news, i) => (
              i < 2 ? // if id > 2 
                <Col key={i} xs={12} lg={6}> {/* print the TileNews */}
                  <Link to={"/mainnews/news?id=" + i}>
                    <TilesNews link={news.attributes.image.data.attributes.url} title={news.attributes.title} /> {/* ../components/tiles/tilesnews.js */}
                  </Link>
                </Col>
                : void (0) // else do nothing
            ))}
          </Row>
          <Link to={"/mainnews"}><h3 className="hoverlink">En savoir plus</h3></Link>
        </Container>

        <Footer /> {/* ../components/menu/footer.js */}
      </>
    )
  }
}