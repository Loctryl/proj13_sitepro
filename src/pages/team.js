import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/menu/footer";
import NavBar from "../components/menu/navbar";
import "./style/team.css";

function Team(props) {

  return (
    <>
      <NavBar />
      <div className="teamBanner"><img src="../../../database/public/uploads/LOLTeam.png" alt="Alkya's banner for game"></img></div>
      <h2 className="line-up">notre line-up</h2>
      <h3 className="teamH3">joueurs</h3>
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
      <h3 className="teamH3">coach</h3>
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

export default Team;