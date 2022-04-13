import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitch, faInstagram, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"

import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom'
import "./footer.css";
import { faFaceAngry } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col xs={12} md={6} lg={3}>
              <FontAwesomeIcon icon={faTwitch} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faFacebook} />
            </Col>
            <Col xs={12} md={6} lg={3}>
              <h3>ABOUT</h3>
              <Link to="/mainnews">Actus</Link>
                <br/>
              <Link to="/mainteam">Teams</Link>
                <br/>
              <Link to="/aboutus">Qui sommes nous ?</Link>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <p>CGU</p>
              <p>Mentions légales</p>
              <p>Politiques de confidentialité</p>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <p>aled</p>
            </Col>
            
          </Row>
        </Container>
      </footer>
    </>
  );
}