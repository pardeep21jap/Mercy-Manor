import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'services' | null
  const servicesRef = useRef(null);
  const locationsRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const closeAll = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  // Close dropdown when clicking anywhere on page
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      const isOutsideServices = servicesRef.current && !servicesRef.current.contains(target);
      const isOutsideLocations = locationsRef.current && !locationsRef.current.contains(target);

      if (isOutsideServices && isOutsideLocations) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [activeDropdown]);

  return (

    <section id="header">
      <div className="container">
        <div className="row header-outer">



          <nav className="navbar col-10">

            <div className="header-logo">
              {/* Logo */}
              <Link to="/" className="nav-logo" onClick={closeAll}>
                <img src={Logo} alt="Mercy Manor Home Care – providing compassionate in-home care in Surrey, BC" />
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
                <li><Link to="/about-us" onClick={closeAll}>About Us</Link></li>

                {/* Services Dropdown */}
                <li className="dropdown" ref={servicesRef}>

                  <button className="dropdown-toggle" onClick={() => toggleDropdown("services")}>
                    Services <span className="caret">▼</span>
                  </button>

                  <ul className={`dropdown-menu ${activeDropdown === "services" ? "show" : ""}`}>
                    <li><Link to="/dementia-care" onClick={closeAll}>Dementia Care </Link></li>
                    <li><Link to="/companion-care" onClick={closeAll}>Companion care</Link></li>
                    <li><Link to="/escorting-care" onClick={closeAll}>Escorting client to appointments</Link></li>
                    <li><Link to="/homemaking" onClick={closeAll}>Home making</Link></li>
                    <li><Link to="/mealprep" onClick={closeAll}>Meal preparation</Link></li>
                    <li><Link to="/nursing-care" onClick={closeAll}>Nursing Care</Link></li>
                  </ul>
                </li>


                {/* Location Dropdown */}
                <li className="dropdown" ref={locationsRef}>
                  <button className="dropdown-toggle" onClick={() => toggleDropdown("locations")}>
                    Locations <span className="caret">▼</span>
                  </button>
                  <ul className={`dropdown-menu ${activeDropdown === "locations" ? "show" : ""}`}>
                    <li><Link to="/home-care-abbotsford" onClick={closeAll}>Home care Abbotsford</Link></li>
                    <li><Link to="/home-care-agassiz" onClick={closeAll}>Home care Agassiz</Link></li>
                    <li><Link to="/home-care-chilliwack" onClick={closeAll}>Home care Chilliwack</Link></li>
                    <li><Link to="/home-care-surrey" onClick={closeAll}>Home care Surrey</Link></li>



                  </ul>
                </li>


                <li><Link to="/blogs" onClick={closeAll}>Blogs</Link></li>




                <li><Link to="/contact" onClick={closeAll}>Contact Us</Link></li>

              </ul>


            </div>
          </nav>

          <div className="get-quote col-2">
            <div className="navbar-phone">
              <a href="tel:+16046131245">
                <FontAwesomeIcon icon={faPhone} className="phone-icon" />
                +1 (604) 613-1245
              </a>
            </div>
            <Link to="/booking">
              <button className="all-button">
                Booking <FontAwesomeIcon icon={faStethoscope} className="nav-icon" />
              </button>
            </Link>
          </div>

        </div>
      </div>

    </section>



  );
}

export default Navbar;
