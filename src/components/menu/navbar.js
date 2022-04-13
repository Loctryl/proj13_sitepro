import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./navbar.css";
const { Component } = require("react");

class NavBar extends Component {
  render() {
    return <div class="TitleFont">
      <Navbar>
        <Row>
          <Col sm={4} md={4} lg={4}>
            <Container>
              <Navbar.Brand href="#home"><img class="logoNav img-fluid" src="http://localhost:1337/uploads/Logo_Colored_PNG_529f0a5229.png?updated_at=2022-04-12T08:59:34.540Z" alt="ALKYA's Logo Colored" /></Navbar.Brand>
            </Container>
          </Col>
          <Col sm={8} md={8} lg={8}>
            <Container>
              <Nav className="me-auto">
                <Nav.Link href="#home">ACTUS</Nav.Link>
                <Nav.Link href="#features">ABOUT US</Nav.Link>
                <Nav.Link href="#pricing">TEAMS</Nav.Link>
              </Nav>
            </Container>
          </Col>
        </Row>
      </Navbar>
    </div>
  }
}

export default NavBar;