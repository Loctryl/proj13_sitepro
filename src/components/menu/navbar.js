import { Nav, Navbar, Stack } from "react-bootstrap";
import "./navbar.css";

export default function NavBar() {
    return <div className="marginNav">
        <Navbar className="SetNavBar">
            <Stack direction="horizontal" gap={5}>
                <Nav.Link href="#home">actus</Nav.Link>
                <Nav.Link href="#features">about us</Nav.Link>
                <Nav.Link href="#pricing">teams</Nav.Link>
                <Nav.Link href="#pricing">shop</Nav.Link>
            </Stack>
        </Navbar>
        <div className="line"></div>
    </div>
}