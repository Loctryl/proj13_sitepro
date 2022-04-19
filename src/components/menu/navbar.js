import { Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
  return (
    <div className="marginNav">
      <Link to="/">
        <img
          className="logoNavbar"
          src={"http://localhost:1337/uploads/Logo_Colored_PNG_3d29f3295a.png?updated_at=2022-04-12T08:59:34.451Z"}
          alt="ALKYA's Logo"
        />
      </Link>
      <Navbar className="SetNavBar">
        <Stack direction="horizontal" gap={5}>
          <Link to="/mainnews">actus</Link>
          <Link to="/aboutus">about us</Link>
          <Link to="/mainteam">teams</Link>
          <Link to="/shop">shop</Link>
        </Stack>
      </Navbar>
      <div className="line" />
    </div>
  )
}