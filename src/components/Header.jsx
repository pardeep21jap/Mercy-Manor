
import "./Header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <header className="inner-main-header">

      <Container>

        <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="../src/assets/logo.png" alt="" />
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
          <a class="nav-link" href="#">About us</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Personal Care Services</a></li>
            <li><a class="dropdown-item" href="#">Home Support Services</a></li>
            <li><a class="dropdown-item" href="#">Professional Nursing Care Services</a></li>
            <li><a class="dropdown-item" href="#">Companionship & Recreation</a></li>
            <li><a class="dropdown-item" href="#">Hospital Recovery Care Service</a></li>
            <li><a class="dropdown-item" href="#">Meal Preparation & Diet Planning</a></li>
          </ul>
        </li>
       <li class="nav-item">
          <a class="nav-link" href="#">Booking</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#">Contact us</a>
        </li>
      </ul>
     <div className="get-quote">
 <button>get quote</button>
     </div>
    

    </div>
  </div>
</nav>

      </Container>

    </header>
  )
}

export default Header;
