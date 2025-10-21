
import "./Header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/Images/Logo.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (


    <header className="inner-main-header">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About us</Nav.Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Personal Care<br />Services</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Home Support<br />Services</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Professional Nursing <br />Care Services</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Companionship<br />& Recreation</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Hospital Recovery<br />Care Service</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">Meal Preparation<br />& Diet Planning</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Booking</Nav.Link>
              <Nav.Link href="#link">Blog</Nav.Link>
              <Nav.Link href="#link">Contact us</Nav.Link>
            </Nav>
            <div className="get-quote">
              <button className="all-button">Book Appointment <FontAwesomeIcon icon={faArrowRight} className="social-icon" /></button>

            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;
