import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import queryString from 'query-string'
import Footer from "../components/menu/footer";
import NavBar from "../components/menu/navbar";
import "./style/team.css";

export default function Team(props) {

  const values = queryString.parse(useLocation().search)
  // console.log(props.teams.data[values.id].attributes)
  // console.log(props.teams.data.attributes.players.data.attributes.first_name)
  return (
    <>
      <NavBar />

      <div className="teamBanner">
        <img src={"http://localhost:1337" + props.teams.data[values.id].attributes.image.data.attributes.url} alt="Alkya's banner for game" />
      </div>
      <h2 className="line-up">notre line-up</h2>
      <h3 className="teamH3">joueurs</h3>
      <Row>
        {/* {props.teams.data[values.id]?.map((player, i) => (
          <Col key={i} sm={6} md={4} lg={4} className="playerCard">
            <Link to={"/mainteam/team/player"}>
              <img src={"http://localhost:1337" + player.attributes.image.data.attributes.url} alt="Alkya's players images" className="imgCard"></img>
              <div>
                <p>prénom</p>
                <p className="blueOne">"pseudo"</p>
                <p>nom de famille</p>
              </div>
            </Link>
          </Col>
        ))} */}
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