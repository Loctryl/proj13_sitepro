import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitch, faInstagram, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"

import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer className="mt-auto">
        <Container className="footer">
          <Row>
            <Col xs={12} md={6} lg={3} className="footerCol">
              <FontAwesomeIcon icon={faTwitch} className="fa-xl"/>
              <FontAwesomeIcon icon={faInstagram} className="fa-xl"/>
              <FontAwesomeIcon icon={faTwitter} className="fa-xl"/>
              <FontAwesomeIcon icon={faFacebook} className="fa-xl"/>
            </Col>
            <Col xs={12} md={6} lg={3} className="footerCol">
              <h3>ABOUT</h3>
              <Link to="/mainnews">Actus</Link>
                <br/>
              <Link to="/mainteam">Teams</Link>
                <br/>
              <Link to="/aboutus">Qui sommes nous ?</Link>
            </Col>
            <Col xs={12} md={6} lg={3} className="footerCol">
              <Link to="/mainnews">Actus</Link>
                <br/>
              <Link to="/mainteam">Teams</Link>
                <br/>
              <Link to="/aboutus">Qui sommes nous ?</Link>
            </Col>
            <Col xs={12} md={6} lg={3} className="footerCol">
              <img className="footerImg" src="http://localhost:1337/uploads/Logo_Black_PNG_3d29f3295a.png?updated_at=2022-04-12T08:59:34.451Z" />
            </Col>
            
          </Row>
        </Container>
      </footer>
    </>
  );
}