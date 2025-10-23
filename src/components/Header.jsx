
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

      <div className="container">


        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src={Logo} alt="" />
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About Us</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">personal care<br></br> service</a></li>
                    <li><a class="dropdown-item" href="#">home support<br></br>  service</a></li>
                    <li><a class="dropdown-item" href="#">professional nursing<br></br>  service</a></li>
                    <li><a class="dropdown-item" href="#">companionship & <br></br> recreation</a></li>
                    <li><a class="dropdown-item" href="#">hospital recovery<br></br>  care service</a></li>
                    <li><a class="dropdown-item" href="#">meal preparation &<br></br>  diet planning</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">booking</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">blog</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">contact Us</a>
                </li>
              </ul>
              <div className="get-quote">
                <button className="all-button">Booking  <FontAwesomeIcon icon={faArrowRight} className='arrow-icon' /> </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>


  )
}

export default Header;
