import { Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
    return <div className="marginNav">
        <Navbar className="SetNavBar">
            <Stack direction="horizontal" gap={5}>
                <Link to="/mainnews">actus</Link>
                <Link to="/aboutus">about us</Link>
                <Link to="/mainteam">teams</Link>
                <Link to="/shop">shop</Link>
            </Stack>
        </Navbar>
        <div className="line"></div>
    </div>
}