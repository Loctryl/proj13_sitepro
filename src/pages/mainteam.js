import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/menu/footer";
import NavBar from "../components/menu/navbar";
import "./style/mainteam.css";

function MainTeam(props){

    return (
      <>
      <NavBar />
      <div className="teamDiv">
        <h2 className="teamTitle" >nos equipes</h2>
      </div>
      <Row>
        <Col sm={12} md={6} lg={6} className="teamCard">
          <Link to={'/mainteam/team'}>
          <Image
          src={"http://localhost:1337/uploads/LOL_Team_Bis_812a7bfcb9.png?updated_at=2022-04-19T13:36:04.077Z"}
          alt="Alkya's LOL Team"
          />
          </Link>
        </Col>
        <Col sm={12} md={6} lg={6} className="teamCard">
        <Link to={'/mainteam/team'}>
          <Image
          src={"../../database/public/uploads/ValoTeamBis.png"}
          alt="Alkya's Valo Team"
          />
          </Link>
        </Col>
        <Col sm={12} md={6} lg={6} className="teamCard">
        <Link to={'/mainteam/team'}>
          <Image
          src={"../../database/public/uploads/R6eamBis.png"}
          alt="Alkya's R6 Team"
          />
          </Link>
        </Col>
        <Col sm={12} md={6} lg={6} className="teamCard">
        <Link to={'/mainteam/team'}>
          <Image
          src={"../../database/public/uploads/RLTeamBis.png"}
          alt="Alkya's RL Team"
          />
          </Link>
        </Col>
      </Row>
      <Footer/>
      </>
    )
  }
  
  export default MainTeam;