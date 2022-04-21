
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import queryString from 'query-string'
import Footer from "../components/menu/footer";
import NavBar from "../components/menu/navbar";
import "./style/team.css";
import TilesPlayer from "../components/tiles/tilesplayer";

export default function Team(props) {

  const values = queryString.parse(useLocation().search)
  let filterplayers = props.players.data
  filterplayers = filterplayers.filter(players => players.attributes.team.data.id === parseInt(values.id)+1)
  // console.log( props.teams.data[values.id].id);
  // console.log(props.teams.data.attributes.players.data.attributes.first_name)
  return (
    <>
      <NavBar />
      <img className="teamBanner" src={"http://localhost:1337" + props.teams.data[values.id].attributes.image.data.attributes.url} alt="Alkya's banner for game" />
      <h2 className="line-up">notre line-up</h2>
      <h3 className="teamH3">&nbsp;joueurs</h3>
      <Container>
        <Row>
          {filterplayers.map((player, i) => (
            <Col key={i} sm={6} md={4} lg={3} className="playerCard">
              <TilesPlayer player={player}/>
            </Col>
          ))}
        </Row>
      </Container>
      <h3 className="teamH3">&nbsp;coach</h3>
      <Row>
        <Col sm={6} md={4} lg={4} className="playerCard">
          <Link to={"/mainteam/team/player"}>
            <img src="../../database/public/uploads/rekkles.jpeg" alt="Alkya's players images" className="imgCard"></img>
            <div>
              <p>prénom</p>
              <p className="blueOne">"pseudo"</p>
              <p>nom de famille</p>
            </div>
          </Link>
        </Col>
      </Row>

      <Footer />
    </>
  )
}