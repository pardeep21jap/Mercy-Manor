import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/Images/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeAll = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  return (

    <section id="header">
      <div className="container">
        <div className="row header-outer">



          <nav className="navbar col-10">

            <div className="header-logo">
              {/* Logo */}
              <Link to="/" className="nav-logo" onClick={closeAll}>
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="nav-container">



              {/* Hamburger */}
              <div className="nav-toggle" onClick={toggleNavbar}>
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* Main Menu */}
              <ul className={`nav-menu ${isOpen ? "active" : ""}`}>

                <li><Link to="/" onClick={closeAll}>Home</Link></li>
                <li><Link to="/AboutUs" onClick={closeAll}>About Us</Link></li>

                {/* Services Dropdown */}
                <li className="dropdown">

                  <button className="dropdown-toggle" onClick={toggleDropdown}>
                    Services <span className="caret">▼</span>
                  </button>

                  <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                    <li><Link to="/Dementia" onClick={closeAll}>Dementia Care </Link></li>
                    <li><Link to="/Companion" onClick={closeAll}>Companion care</Link></li>
                    <li><Link to="/Escorting" onClick={closeAll}>Escorting client to appointments</Link></li>
                    <li><Link to="/Homemaking" onClick={closeAll}>Home making</Link></li>
                    <li><Link to="/Mealprep" onClick={closeAll}>Meal preparation</Link></li>
                    <li><Link to="/Nursingcare" onClick={closeAll}>Nursing Care</Link></li>
                  </ul>
                </li>

                <li><Link to="/blog" onClick={closeAll}>Blog</Link></li>
                <li><Link to="/booking" onClick={closeAll}>Booking</Link></li>
                <li><Link to="/contact" onClick={closeAll}>Contact Us</Link></li>

              </ul>


            </div>
          </nav>

          <div className="get-quote col-2">
            <button className="all-button">
              Booking <FontAwesomeIcon icon={faArrowRight} className='arrow-icon' />
            </button>
          </div>

        </div>
      </div>

    </section>



  );
}

export default Navbar;
