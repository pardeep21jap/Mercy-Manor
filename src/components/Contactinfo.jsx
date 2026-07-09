import React from 'react'
import "./Contactinfo.css"
import "./Slotpara.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Contactinfo() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const ACCESS_KEY = "4869023d-f558-405f-9db7-c877e2d3ab4b"; // get from Web3Forms

  const handleChange = (e) => {
    const { name, value } = e.target;
    let v = value;
    if (name === "phone") {
      v = String(v).replace(/\D/g, "").slice(0, 10);
    }
    setForm((s) => ({ ...s, [name]: v }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const digitsOnlyPhone = String(form.phone || "").replace(/\D/g, "");
    if (digitsOnlyPhone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    const data = {
      access_key: ACCESS_KEY,
      name: `${form.firstName} ${form.lastName}`.trim(),
      email: form.email,
      phone: digitsOnlyPhone,
      message: form.message,
      to: "info@mercymanor.ca",
      subject: "New Lead from Mercy Manor Website",
      from_name: "Mercy Manor Website"
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (json.success) {
        setSuccessMessage("Form submitted successfully");

        // ✅ GA4 TRACKING (CORRECT PLACE)
        window.gtag?.("event", "form_submit", {
          event_category: "lead",
          event_label: "Contact_Form",
          form_name: "Contact_Form",
        });

        setForm({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: ""
        });
        navigate("/thanks");
      } else {
        alert("Submission failed: " + JSON.stringify(json));
      }
    } catch (err) {
      console.error(err);
      alert("Network error");
    }
  };
  return (
    <div>
      <section id='coninfo-section'>
        <div className="container">
          <div className="coninfo-outer">
            <div className="row coninfo-inner">

              <div className="col-lg-6 col-xs-12 col-sm-12 col-md-12 contact-icons">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faPhone} className='con-icon' />
                    <h4>Call Us</h4>
                    <span>+ 604 613 1246</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} className='con-icon' />
                    <h4>E - Mail</h4>
                    <span>info@mercymanor.ca</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faClock} className='con-icon' />
                    <h4> Working Hours </h4>
                    <span>Mon – Sun : Open 24 Hours</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faThumbsUp} className='con-icon' />
                    <h4> Follow Mercy Manor </h4>
                    <span className="getfot" >  <a href="https://www.facebook.com/profile.php?id=61589532728856" target='_blank'><FontAwesomeIcon icon={faSquareFacebook} className='fbicon' size="17px" style={{ color: '#FD5D02' }} /></a>
                    </span>
                    <span className="getfot" > <a href="https://www.instagram.com/mercymanorhomecarebc/" target='_blank'>  <FontAwesomeIcon icon={faSquareInstagram} className='instaicon' size="17px" style={{ color: '#FD5D02' }} />
                    </a></span>
                  </li>

                </ul>
              </div>
              <div className="col-lg-6 col-xs-12 col-sm-12 col-md-12 contact-form">
                {successMessage && (
                  <div className="alert alert-success" role="alert">
                    {successMessage}
                  </div>
                )}
                <form onSubmit={handleSubmit}>

                  <ul>
                    <li>
                      <div className="form-group own-form-group">
                        <label className='ownlabel' htmlFor="exampleInputFirstName">First Name</label>
                        <input type="text" name="firstName" value={form.firstName} onChange={handleChange} className="form-control" placeholder="" required></input>
                      </div>
                    </li>
                    <li>
                      <div className="form-group own-form-group">
                        <label htmlFor="exampleInputLastName">Last Name</label>
                        <input type="text" name="lastName" value={form.lastName} onChange={handleChange} className="form-control" placeholder="" required></input>
                      </div>
                    </li>
                    <li>
                      <div className="form-group own-form-group">
                        <label htmlFor="inputNumber">Phone Number</label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="form-control" id="inputNumber" inputMode="numeric" placeholder="" required></input>
                      </div>
                    </li>
                    <li>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Email address</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} className="form-control" id="exampleFormControlInput1" placeholder="" required></input>
                      </div>
                    </li>

                  </ul>

                  <div className="form-group own-form-group own-textarea">
                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} className="form-control" id="exampleFormControlTextarea1" rows="10" required></textarea>
                  </div>

                  <button type="submit" className='all-button'>Submit</button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contactinfo