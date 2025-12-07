import React from "react";
import "./Slotform.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

function Slotform() {


  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    dob: "",
    claimNumber: "",
    accidentDate: "",
    email: "",
    message: "",
    optApple1: false,
    optApple2: false,
    optApple3: false,
    optApple4: false,
    optApple5: false,
    optApple6: false,
    optApple7: false,
    optApple8: false,
    optApple9: false,
    optApple10: false,
  });
  const ACCESS_KEY = "af8d9131-2484-4a85-8270-b6020831867d"; // get from Web3Forms

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    let v = type === "checkbox" ? checked : value;
    // For phone field: remove non-digits and limit to 10 characters
    if (name === "phone") {
      v = String(v).replace(/\D/g, "").slice(0, 10);
    }
    setForm((s) => ({ ...s, [name]: v }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate phone is exactly 10 digits
    const digitsOnlyPhone = String(form.phone || "").replace(/\D/g, "");
    if (digitsOnlyPhone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    // prepare user-friendly payload (checkboxes as labels)
    const data = {
      access_key: ACCESS_KEY,
      // include both combined name and separate fields
      name: `${form.firstName} ${form.lastName}`.trim(),
      // first_name: form.firstName,
      // last_name: form.lastName,
      phone: digitsOnlyPhone,
      date_of_birth: form.dob,
      claim_number: form.claimNumber,
      date_of_accident: form.accidentDate,
      email: form.email,
      message: form.message,
      // include chosen options as numbered list
      ServiceRequest: [
        form.optApple1 && "Post Hospital Discharge Care",
        form.optApple2 && "Wound Care - Simple / Complex",
        form.optApple3 && "Pharmacy Service - Medication Home Delivery",
        form.optApple4 && "Medical Escort for appointments",
        form.optApple5 && "Residential Cleaning Services",
        form.optApple6 && "Law Maintenance",
        form.optApple7 && "Gardening",
        form.optApple8 && "Attendant Care",
        form.optApple9 && "Home Making Services",
        form.optApple10 && "Companionship"

      ].filter(Boolean).map((item, index) => `${index + 1}. ${item}`).join("\n"),
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        alert("Submitted! Check your email.");
        // Reset form after successful submission
        setForm({
          firstName: "",
          lastName: "",
          phone: "",
          dob: "",
          claimNumber: "",
          accidentDate: "",
          email: "",
          message: "",
          optApple1: false,
          optApple2: false,
          optApple3: false,
          optApple4: false,
          optApple5: false,
          optApple6: false,
          optApple7: false,
          optApple8: false,
          optApple9: false,
          optApple10: false
        });
      } else {
        alert("Submission failed: " + JSON.stringify(json));
      }
    } catch (err) {
      console.error(err);
      alert("Network error");
    }
  };

  return (
    <>
      <section id="form-section">
        <div className="container">
          <div className="row form-outer">
            <div className="col-5 formcontent">
              <h3>Benefits If You Schedule An Appointment</h3>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="formicon" />
                  Analyze the Problems You are Facing
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="formicon" />
                  Free Consultation Until Treatment
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="formicon" />
                  Flexible in Scheduling Time
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="formicon" />
                  Reservations Do Not Require Waiting
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="formicon" />
                  24/7 Support at Any Time
                </li>
              </ul>
              <p>
                Find the Right Service for You Today<br></br>
                Experience healthcare you can trust, delivered by a dedicated
                team committed to compassionate and high-quality care.
              </p>
              <div className="benefit-icons">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} className="bene-icon" />
                    <strong>info@mercy.com</strong>
                  </li>

                  <li>
                    <FontAwesomeIcon icon={faPhone} className="bene-icon" />
                    <strong>+1234567890</strong>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faInstagram} className="bene-icon" />
                    <strong>mercyminorities</strong>
                  </li>
                </ul>
              </div>

              <div className="service-image">
                <img src="./src/assets/services.jpg" alt="" />
              </div>
            </div>

            <div className="col-7 mainform">
              <form onSubmit={handleSubmit}>
                <ul>
                  <li>
                    <div className="form-group own-form-group">
                      <label className="ownlabel" htmlFor="exampleInputFirstName">
                        First Name
                      </label>
                      <input id="exampleInputFirstName" type="text" name="firstName" value={form.firstName} onChange={handleChange} className="form-control" placeholder="First name" required />
                    </div>
                  </li>
                  <li>
                    <div className="form-group own-form-group">
                      <label htmlFor="exampleInputLastName">Last Name</label>
                      <input id="exampleInputLastName" type="text" name="lastName" value={form.lastName} onChange={handleChange} className="form-control" placeholder="Last name" required />
                    </div>
                  </li>
                  <li>
                    <div className="form-group own-form-group">
                      <label htmlFor="inputNumber">Phone Number</label>
                      <input id="inputNumber" type="tel" name="phone" value={form.phone} onChange={handleChange} className="form-control" inputMode="numeric" pattern="[0-9]{10}" maxLength="10" placeholder="Phone Number" required />
                    </div>
                  </li>
                  <li>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlInput1">
                        Email address
                      </label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} className="form-control" id="exampleFormControlInput1" placeholder="Email" required></input>
                    </div>
                  </li>
                  <li>
                    <div className="form-group own-form-group">
                      <label htmlFor="inputDate">dob</label>
                      <input type="date" name="dob" value={form.dob} onChange={handleChange} className="form-control" id="inputDate" required />
                    </div>
                  </li>
                  <li>
                    <div className="form-group own-form-group">
                      <label htmlFor="inputClaimNumber">Claim Number</label>
                      <input type="number" name="claimNumber" value={form.claimNumber} onChange={handleChange} className="form-control" id="inputClaimNumber" placeholder="Claim Number" required></input>
                    </div>
                  </li>
                  <li>
                    <div className="form-group own-form-group">
                      <label htmlFor="inputDateAccident">Date of Accident</label>
                      <input type="date" name="accidentDate" value={form.accidentDate} onChange={handleChange} className="form-control" id="inputDateAccident" required />
                    </div>
                  </li>
                </ul>

                <div className="own-checkitems">
                  <div className="form-group own-form-group own-textarea">
                    <label htmlFor="exampleFormControlTextarea1">
                      Brief Injury Details
                    </label>
                    <textarea name="message" value={form.message} onChange={handleChange} className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                  </div>

                  <span>Service Request</span>
                  <div className="form-check">
                    <input type="checkbox" name="optApple1" checked={form.optApple1} onChange={handleChange} className="form-check-input" id="checkDefault" />
                    <label className="form-check-label" htmlFor="checkDefault">
                      Post Hospital Discharge Care
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" name="optApple2" checked={form.optApple2} onChange={handleChange} className="form-check-input" id="checkDefault" />
                    <label className="form-check-label" htmlFor="checkDefault">
                      Wound Care - Simple / Complex
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" name="optApple3" checked={form.optApple3} onChange={handleChange} className="form-check-input" id="checkDefault" />
                    <label className="form-check-label" htmlFor="checkDefault">
                      Pharmacy Service - Medication Home Delivery
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" name="optApple4" checked={form.optApple4} onChange={handleChange} className="form-check-input" id="checkDefault" />
                    <label className="form-check-label" htmlFor="checkDefault">
                      Medical Escort for appointments
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" name="optApple5" checked={form.optApple5} onChange={handleChange} className="form-check-input" id="checkDefault" />
                    <label className="form-check-label" htmlFor="checkDefault">
                      Residential Cleaning Services
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" name="optApple6" checked={form.optApple6} onChange={handleChange} className="form-check-input" id="checkDefault" />
                    <label className="form-check-label" htmlFor="checkDefault">
                      Law Maintenance
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" name="optApple7" checked={form.optApple7} onChange={handleChange} className="form-check-input" id="checkDefault" />
                    <label className="form-check-label" htmlFor="checkDefault">
                      Gardening
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" name="optApple8" checked={form.optApple8} onChange={handleChange} className="form-check-input" id="checkDefault" />
                    <label className="form-check-label" htmlFor="checkDefault">
                      Attendant Care
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" name="optApple9" checked={form.optApple9} onChange={handleChange} className="form-check-input" id="checkDefault" />
                    <label className="form-check-label" htmlFor="checkDefault">
                      Home Making Services
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" name="optApple10" checked={form.optApple10} onChange={handleChange} className="form-check-input" id="checkDefault" />
                    <label className="form-check-label" htmlFor="checkDefault">
                      Companionship
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Slotform;
