import { Component } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/menu/footer";
import NavBar from "../components/menu/navbar";
import "./style/mainteam.css";

export default function MainTeam(props) {
  return (
    <>
      <NavBar />

      <div className="teamDiv">
        <h2 className="teamTitle">nos equipes</h2>
      </div>
      <Row>
        {props.teams.data?.map((team, i) => (
          <Col key={i} sm={12} md={6} lg={6} className="teamCard">
            <Link to={'/mainteam/team?id=' + i}>
              <Image
                src={"http://localhost:1337" + team.attributes.styled_image.data.attributes.url}
                alt="Alkya's Team"
              />
            </Link> 
          </Col>
        ))}
      </Row>

      <Footer />
    </>
  )
}