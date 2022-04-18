import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitch, faInstagram, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"

import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import CguPdf from './pdf/CGU Alkya.pdf'
import MlPdf from './pdf/Mentions légales.pdf'
import "./footer.css";
import { Component } from "react";

export default class Footer extends Component {

  constructor() {
    super(this.state)
    this.state = {
      sponsors: [],
      partners: [],
      social: {
        twitch: "https://www.twitch.tv/teamalkya",
        insta: "https://www.instagram.com/teamalkya/",
        facebook: "https://www.facebook.com/teamalkya/",
        twitter: "https://www.twitter.com/teamalkya/"
      }
    }
  }

  componentDidMount = async () => {
    const reponse1 = await fetch('http://localhost:1337/api/partners?populate=*', { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    const fetchPartners = await reponse1.json()

    const reponse2 = await fetch('http://localhost:1337/api/sponsors?populate=*', { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    const fetchSponsors = await reponse2.json()

    this.setState({
      sponsors:fetchSponsors, partners:fetchPartners
    })
  }

  render() {
    const redirect = (link) => {
      window.open(link)
    }

    return (
      <>
        <footer className="mt-auto">
          <Container className="footerSponsors">
            <h2>Sponsors Majeurs</h2>
            <Row>
              {this.state.sponsors.data?.map((sponsors, i) => (
                <Col xs={6} lg={4} xxl={3} className="text-align-center divImg">
                  <img
                    key={i}
                    src={"http://localhost:1337" + sponsors.attributes.logo.data.attributes.url}
                    alt={"Sponsor " + sponsors.attributes.name}
                    onClick={() => redirect(sponsors.attributes.url)}
                  />
                </Col>
              ))}
            </Row>

          </Container>
          <Container className="footerParteners">
            <h2>Partenaires officiels</h2>
            <Row>
              {this.state.partners.data?.map((partners, i) => (
                <Col xs={6} lg={4} xxl={3} className="text-align-center divImg">
                  <img
                    key={i}
                    src={"http://localhost:1337" + partners.attributes.logo.data.attributes.url}
                    alt={"Partner " + partners.attributes.name}
                    onClick={() => redirect(partners.attributes.url)}
                  />
                </Col>
              ))}
            </Row>
          </Container>
          <Container className="footerLinks">
            <Row>
              <Col xs={12} md={6} lg={3} className="footerCol text-align-center">
                <FontAwesomeIcon icon={faTwitch} onClick={() => redirect(this.state.social.twitch)} className="fa-xl" />
                <FontAwesomeIcon icon={faInstagram} onClick={() => redirect(this.state.social.insta)} className="fa-xl" />
                <FontAwesomeIcon icon={faTwitter} onClick={() => redirect(this.state.social.twitter)} className="fa-xl" />
                <FontAwesomeIcon icon={faFacebook} onClick={() => redirect(this.state.social.facebook)} className="fa-xl" />
              </Col>
              <Col xs={12} md={6} lg={3} className="footerCol">
                <h2 className="about">About</h2>
                <Link to="/mainnews">Actus</Link>
                <br />
                <Link to="/mainteam">Teams</Link>
                <br />
                <Link to="/aboutus">Qui sommes nous ?</Link>
              </Col>
              <Col xs={12} md={6} lg={3} className="footerCol pdfs">
                <a target="_blank" href={CguPdf}>Conditions Générales d'Utilisation</a>
                <a target="_blank" href={MlPdf}>Mentions Légales</a>
                <a target="_blank" href={MlPdf}>Politique de Confidentialité</a>
              </Col>
              <Col xs={12} md={6} lg={3} className="footerCol text-align-center">
                <img className="footerImg" src="http://localhost:1337/uploads/Logo_Black_PNG_3d29f3295a.png?updated_at=2022-04-12T08:59:34.451Z" />
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    )
  }
}