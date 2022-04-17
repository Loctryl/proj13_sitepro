import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitch, faInstagram, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"

import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CguPdf from './pdf/CGU Alkya.pdf'
import MlPdf from './pdf/Mentions légales.pdf'
import "./footer.css";

export default function Footer(props) { 
  return(
    <>
    <footer className="mt-auto">
      <Container className="footerSponsors">
        <h2>Sponsors Majeurs</h2>
        {props.sponsors.data?.map((sponsors, i) => (
          <img key={i} src={"http://localhost:1337"+sponsors.attributes.logo.data.attributes.url} className="img"/>
        ))}
      </Container>
      <Container className="footerParteners">
        <h2>Partenaires officiels</h2>
        {props.partners.data?.map((partners, i) => (
          <img key={i} src={"http://localhost:1337"+partners.attributes.logo.data.attributes.url} className="img"/>
        ))}
      </Container>
      <Container className="footerLinks">
        <Row>
          <Col xs={12} md={6} lg={3} className="footerCol">
            <FontAwesomeIcon icon={faTwitch} className="fa-xl" />
            <FontAwesomeIcon icon={faInstagram} className="fa-xl" />
            <FontAwesomeIcon icon={faTwitter} className="fa-xl" />
            <FontAwesomeIcon icon={faFacebook} className="fa-xl" />
          </Col>
          <Col xs={12} md={6} lg={3} className="footerCol">
            <Link to="/mainnews">Actus</Link>
              <br />
            <Link to="/mainteam">Teams</Link>
              <br />
            <Link to="/aboutus">Qui sommes nous ?</Link>
          </Col>
          <Col xs={12} md={6} lg={3} className="footerCol">
            <a target="_blank" href={CguPdf}>Conditions Générales d'Utilisation</a>
            <a target="_blank" href={MlPdf}>Mentions Légales</a>
            <a target="_blank" href={MlPdf}>Politique de Confidentialité</a>
          </Col>
          <Col xs={12} md={6} lg={3} className="footerCol">
            <img className="footerImg" src="http://localhost:1337/uploads/Logo_Black_PNG_3d29f3295a.png?updated_at=2022-04-12T08:59:34.451Z" />
          </Col>

        </Row>
      </Container>
    </footer>
  </>
  )
}