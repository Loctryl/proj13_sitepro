import { Component } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/menu/footer";
import NavBar from "../components/menu/navbar";
import "./style/mainteam.css";

export default class MainTeam extends Component {

  constructor(state) {
    super(state)
    this.state = {
      players: [],
      teams: []
    }
  }

  componentDidMount = async () => {
    const reponse1 = await fetch('http://localhost:1337/api/players', { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    const fetchPlayers = await reponse1.json()

    const reponse2 = await fetch('http://localhost:1337/api/teams', { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    const fetchTeams = await reponse2.json()

    this.setState({
      players: fetchPlayers, teams: fetchTeams
    })
  }

  render() {
    return (
      <>
        <NavBar />
        <div className="teamDiv">
          <h2 className="teamTitle">nos equipes</h2>
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
                src={"http://localhost:1337/uploads/RL_Team_Bis_be6b2e60d3.png?updated_at=2022-04-19T13:36:02.456Z"}
                alt="Alkya's Valo Team"
              />
            </Link>
          </Col>
          <Col sm={12} md={6} lg={6} className="teamCard">
            <Link to={'/mainteam/team'}>
              <Image
                src={"http://localhost:1337/uploads/R6_Team_Bis_388e1b2a5d.png?updated_at=2022-04-19T13:36:03.676Z"}
                alt="Alkya's R6 Team"
              />
            </Link>
          </Col>
          <Col sm={12} md={6} lg={6} className="teamCard">
            <Link to={'/mainteam/team'}>
              <Image
                src={"http://localhost:1337/uploads/Valo_Team_Bis_a0b68b83c1.png?updated_at=2022-04-19T13:36:02.426Z"}
                alt="Alkya's RL Team"
              />
            </Link>
          </Col>
        </Row>
        <Footer />
      </>
    )
  }
}