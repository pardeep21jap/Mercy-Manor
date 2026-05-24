import "./Header.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/Logo.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Header() {

  const closeNavbar = () => {
    const nav = document.getElementById("navbarSupportedContent");
    const dropdowns = document.querySelectorAll(".dropdown-menu.show");

    // Close main navbar
    if (nav && nav.classList.contains("show")) {
      nav.classList.remove("show");
    }

    // Close dropdowns
    dropdowns.forEach(d => d.classList.remove("show"));
  };

  return (
    <header className="inner-main-header">
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={Logo} alt="" />
            </a>

            <button className="navbar-toggler" type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  <Link to="/" className="nav-link" onClick={closeNavbar}>Home</Link>
                </li>

                <li className="nav-item">
                  <Link to="/AboutUs" className="nav-link" onClick={closeNavbar}>About Us</Link>
                </li>

                {/* FIXED DROPDOWN */}
                <li className="nav-item dropdown">
                  <Link to="/Services" className="nav-link" onClick={closeNavbar}>
                    Services
                  </Link>
                  <a className="nav-link dropdown-toggle own-dropdown"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown">

                  </a>

                  <ul className="dropdown-menu">
                    <li><Link to="/dementia-care" className="dropdown-item" onClick={closeNavbar}>Dementia Care Service</Link></li>
                    <li><Link to="/companion-care" className="dropdown-item" onClick={closeNavbar}>Companion Care Service</Link></li>
                    <li><Link to="/escorting-care" className="dropdown-item" onClick={closeNavbar}>Escorting Clients Service</Link></li>
                    <li><Link to="/homemaking" className="dropdown-item" onClick={closeNavbar}>Home Making Service</Link></li>
                    <li><Link to="/mealprep" className="dropdown-item" onClick={closeNavbar}>Meal Prepare Service</Link></li>
                    <li><Link to="/nursing-care" className="dropdown-item" onClick={closeNavbar}>Nursing Care Service</Link></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link to="/Booking" className="nav-link" onClick={closeNavbar}>Booking</Link>
                </li>

                <li className="nav-item">
                  <Link to="/Blog" className="nav-link" onClick={closeNavbar}>Blog</Link>
                </li>

                <li className="nav-item">
                  <Link to="/Contact" className="nav-link" onClick={closeNavbar}>Contact</Link>
                </li>

              </ul>

              <div className="get-quote">
                <button className="all-button">
                  Booking <FontAwesomeIcon icon={faArrowRight} className='arrow-icon' />
                </button>
              </div>

            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
