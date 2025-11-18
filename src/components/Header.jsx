
import "./Header.css";
import { Link } from 'react-router-dom';
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
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={Logo} alt="" />
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                </li>

                <li className="nav-item">
                  <Link to="/AboutUs" className="nav-link">About Us</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link to="/Services" className="nav-link">Services</Link>
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Dementia Care <br></br> service</a></li>
                    <li><a className="dropdown-item" href="#">Companion care<br></br>  service</a></li>
                    <li><a className="dropdown-item" href="#">Escorting client to appointments<br></br>  service</a></li>
                    <li><a className="dropdown-item" href="#">Home making</a></li>
                    <li><a className="dropdown-item" href="#">Meal preparation</a></li>
                    <li><a className="dropdown-item" href="#">Nursing Care</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                   <Link to="/Booking" className="nav-link">Booking</Link>
                
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">blog</a>
                </li>
                <li className="nav-item">
                  <Link to="/Contact" className="nav-link">Contact</Link>
                </li>
              </ul>
              <div className="get-quote">
                <button className="all-button"> Booking  <FontAwesomeIcon icon={faArrowRight} className='arrow-icon' /> </button>
              </div>

            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;
