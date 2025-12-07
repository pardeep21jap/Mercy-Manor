
// import "./Header.css";
// import { Link } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Logo from "../assets/Images/Logo.png";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// function Header() {
//   return (
//     <header className="inner-main-header">
//       <div className="container">
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//           <div className="container-fluid">
//             <a className="navbar-brand" href="#">
//               <img src={Logo} alt="" />
//             </a>

//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">

//                   <Link to="/" className="nav-link active" aria-current="page">Home</Link>

//                 </li>

//                 <li className="nav-item">

//                   <Link to="/AboutUs" className="nav-link">About Us</Link>

//                 </li>
//                 <li className="nav-item dropdown">

//                   <Link to="/Services" className="nav-link">Services</Link>

//                   <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   </a>
//                   <ul className="dropdown-menu">

//                     <li>

//                       <Link to="/Dementia" className="nav-link">Dementia Care<br></br> Service</Link>

//                     </li>
//                     <li>

//                       <Link to="/Companion" className="nav-link">Companion Care<br></br>   Service</Link>

//                     </li>
//                     <li>

//                       <Link to="/Escorting" className="nav-link">Escorting Clients<br></br> Service</Link>

//                     </li>
//                     <li>

//                       <Link to="/Homemaking" className="nav-link">Home Making<br></br> Service</Link>

//                     </li>
//                     <li>

//                       <Link to="/Mealprep" className="nav-link">Meal Prepare<br></br> Service</Link>

//                     </li>
//                     <li>

//                       <Link to="/Nursingcare" className="nav-link">Nursing Care<br></br> Service</Link>

//                     </li>
//                   </ul>
//                 </li>
//                 <li className="nav-item">

//                   <Link to="/Booking" className="nav-link">Booking</Link>

//                 </li>
//                 <li className="nav-item">

//                   <Link to="/Blog" className="nav-link">Blog</Link>

//                 </li>
//                 <li className="nav-item">

//                   <Link to="/Contact" className="nav-link">Contact</Link>

//                 </li>
//               </ul>
//               <div className="get-quote">
//                 <button className="all-button"> Booking  <FontAwesomeIcon icon={faArrowRight} className='arrow-icon' /> </button>
//               </div>

//             </div>
//           </div>
//         </nav>
//       </div>
//     </header>


//   )
// }

// export default Header;



// import "./Header.css";
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Logo from "../assets/Images/Logo.png";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// function Header() {

//   const closeNavbar = () => {
//     const nav = document.getElementById("navbarSupportedContent");
//     if (nav.classList.contains("show")) {
//       nav.classList.remove("show");
//     }
//   };

//   return (
//     <header className="inner-main-header">
//       <div className="container">
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//           <div className="container-fluid">
//             <a className="navbar-brand" href="#">
//               <img src={Logo} alt="" />
//             </a>

//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
//               aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">

//                 <li className="nav-item">
//                   <Link to="/" className="nav-link" onClick={closeNavbar}>Home</Link>
//                 </li>

//                 <li className="nav-item">
//                   <Link to="/AboutUs" className="nav-link" onClick={closeNavbar}>About Us</Link>
//                 </li>

//                 <li className="nav-item dropdown">
//                   <Link to="/Services" className="nav-link" onClick={closeNavbar}>Services</Link>

//                   <a className="nav-link dropdown-toggle" href="#" role="button"
//                     data-bs-toggle="dropdown" aria-expanded="false"></a>

//                   <ul className="dropdown-menu">
//                     <li><Link to="/Dementia" className="nav-link" onClick={closeNavbar}>Dementia Care Service</Link></li>
//                     <li><Link to="/Companion" className="nav-link" onClick={closeNavbar}>Companion Care Service</Link></li>
//                     <li><Link to="/Escorting" className="nav-link" onClick={closeNavbar}>Escorting Clients Service</Link></li>
//                     <li><Link to="/Homemaking" className="nav-link" onClick={closeNavbar}>Home Making Service</Link></li>
//                     <li><Link to="/Mealprep" className="nav-link" onClick={closeNavbar}>Meal Prepare Service</Link></li>
//                     <li><Link to="/Nursingcare" className="nav-link" onClick={closeNavbar}>Nursing Care Service</Link></li>
//                   </ul>
//                 </li>

//                 <li className="nav-item">
//                   <Link to="/Booking" className="nav-link" onClick={closeNavbar}>Booking</Link>
//                 </li>

//                 <li className="nav-item">
//                   <Link to="/Blog" className="nav-link" onClick={closeNavbar}>Blog</Link>
//                 </li>

//                 <li className="nav-item">
//                   <Link to="/Contact" className="nav-link" onClick={closeNavbar}>Contact</Link>
//                 </li>

//               </ul>

//               <div className="get-quote">
//                 <button className="all-button">Booking <FontAwesomeIcon icon={faArrowRight} className='arrow-icon' /></button>
//               </div>

//             </div>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;


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
    if (nav.classList.contains("show")) {
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
                    <li><Link to="/Dementia" className="dropdown-item" onClick={closeNavbar}>Dementia Care Service</Link></li>
                    <li><Link to="/Companion" className="dropdown-item" onClick={closeNavbar}>Companion Care Service</Link></li>
                    <li><Link to="/Escorting" className="dropdown-item" onClick={closeNavbar}>Escorting Clients Service</Link></li>
                    <li><Link to="/Homemaking" className="dropdown-item" onClick={closeNavbar}>Home Making Service</Link></li>
                    <li><Link to="/Mealprep" className="dropdown-item" onClick={closeNavbar}>Meal Prepare Service</Link></li>
                    <li><Link to="/Nursingcare" className="dropdown-item" onClick={closeNavbar}>Nursing Care Service</Link></li>
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
