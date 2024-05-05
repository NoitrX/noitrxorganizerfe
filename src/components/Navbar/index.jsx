
import { Container, Nav, Navbar } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import SNavlink from "../Navlink"
export default function SNavbar() {
    const navigate = useNavigate()
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
                <Nav className="me-auto">
                    <SNavlink action={() => navigate('/')}>Home</SNavlink>
                    <SNavlink action={() => navigate('/categories')}>Categories</SNavlink>
                    <SNavlink action={() => navigate('/talents')}>Talents</SNavlink>
                    <SNavlink action={() => navigate('/events')}>Events</SNavlink>
                    <SNavlink action={() => navigate('/participant')}>Participants</SNavlink>
                    <SNavlink action={() => navigate('/transactions')}>Transactions</SNavlink>
                </Nav>
            </Container>
        </Navbar>
    )
}
