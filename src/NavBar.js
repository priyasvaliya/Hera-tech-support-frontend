import {Container, Nav, Navbar} from "react-bootstrap";
import './NavBar.css'

function NavigationBar() {

    return (
        <Navbar variant="light">
            <Container>
                <Navbar.Brand href="/customer-home">Hera</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/customer-home">Home</Nav.Link>
                    <Nav.Link href="/order-history">Orders</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;