import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper, faUserTie, faPeopleGroup, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Offcanvas } from "bootstrap";
import { Container, Nav, Navbar, NavDropdown, OffcanvasHeader, OffcanvasTitle, OffcanvasBody, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
  return (
    <>
      <div className="marginNav element-to-hide-on-small">
        <Navbar className="SetNavBar">
          <Link to="/">
            <img
              className="logoNavbar"
              src={"http://localhost:1337/uploads/Logo_Colored_PNG_529f0a5229.png?updated_at=2022-04-12T08:59:34.540Z"}
              alt="ALKYA's Logo"
            />
          </Link>
          <Stack direction="horizontal" gap={5}>
            <Link to="/mainnews">actus</Link>
            <Link to="/aboutus">about us</Link>
            <Link to="/mainteam">teams</Link>
            <Link to="/shop">shop</Link>
          </Stack>
        </Navbar>
        <div className="line" />
      </div>
      <div className="element-to-hide-on-other">
        <Navbar expand={false}>
          <Container fluid>
            <Navbar.Brand>
              <Link to="/">
                <img
                  className="logoNavbar"
                  src={"http://localhost:1337/uploads/Logo_Colored_PNG_529f0a5229.png?updated_at=2022-04-12T08:59:34.540Z"}
                  alt="ALKYA's Logo"
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <OffcanvasHeader closeButton>
                <OffcanvasTitle id="offcanvasNavbarLabel">ALKYA</OffcanvasTitle>
              </OffcanvasHeader>
              <OffcanvasBody>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <Link to="/mainnews">Actus <FontAwesomeIcon icon={faNewspaper} className="fa-xl" /> </Link>
                  <hr />
                  <Link to="/aboutus">About Us <FontAwesomeIcon icon={faUserTie} className="fa-xl" /></Link>
                  <hr />
                  <Link to="/mainteam">Teams <FontAwesomeIcon icon={faPeopleGroup} className="fa-xl" /></Link>
                  <hr />
                  <Link to="/shop">Shop <FontAwesomeIcon icon={faCartShopping} className="fa-xl" /></Link>
                </Nav>
              </OffcanvasBody>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </>
  )
}