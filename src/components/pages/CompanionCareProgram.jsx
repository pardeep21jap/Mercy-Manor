import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/Logo-backgroundtransparent-.png";
import heroImg from "../../assets/comcare.webp";
import sidebarImg from "../../assets/outing.webp";
import "./CompanionCareProgram.css";

const ACCESS_KEY = "4869023d-f558-405f-9db7-c877e2d3ab4b";

const INCLUDED_ITEMS = [
  { icon: "people", label: "Friendly conversation and meaningful companionship" },
  { icon: "heart", label: "Emotional support and social engagement" },
  { icon: "home", label: "Light housekeeping - laundry, dishes, tidying" },
  { icon: "pill", label: "Medication reminders (non-medical)" },
  { icon: "cart", label: "Grocery shopping or help with errands" },
  { icon: "walk", label: "Company on walks and community outings" },
  { icon: "book", label: "Reading, games, puzzles, crafts, or favourite hobbies" },
  { icon: "shield", label: "Wellness and safety check-ins" },
];

const WHO_CAN_APPLY = [
  "Adults 65+, or adults living with a disability who'd benefit from companionship",
  "Living alone, experiencing isolation, or with limited family/social support",
  "Comfortable with non-medical support (no skilled nursing required)",
  "Residing within Mercy Manor's Surrey service area",
  "Priority may be given to those facing temporary hardship - recovery, caregiver stress, or loss of a loved one",
];

const LIVING_SITUATION_OPTIONS = [
  "I live alone",
  "I have limited family or social support",
  "I am experiencing isolation or loneliness",
  "None of these",
];

const CIRCUMSTANCE_OPTIONS = [
  "Financial hardship",
  "Recent illness or hospitalization",
  "Caregiver stress",
  "Loss of a loved one",
  "None of these",
];

const CITY_OPTIONS = ["Surrey", "Abbotsford", "Chilliwack", "Agassiz", "Other"];

const GLYPHS = {
  heart: "♡",
  phone: "◌",
  people: "👥",
  home: "⌂",
  pill: "💊",
  cart: "🛒",
  walk: "🚶",
  book: "📖",
  shield: "🛡",
  clock: "◔",
  calendar: "▦",
  check: "✓",
  hands: "♡",
  pin: "●",
  clip: "▤",
  lock: "🔒",
  send: "➜",
};

function ProgramIcon({ name, className = "" }) {
  return (
    <span className={`ccp-glyph ccp-glyph-${name} ${className}`.trim()} aria-hidden="true">
      {GLYPHS[name] || "•"}
    </span>
  );
}

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  city: "",
  ageGroup: "65plus",
  hasDisability: "",
  livingSituation: [],
  needsNursingCare: "",
  circumstances: [],
  additionalInfo: "",
  consent: false,
};

function CompanionCareProgram() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [successMessage, setSuccessMessage] = useState("");

  const scrollToForm = (e) => {
    e.preventDefault();
    document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    let nextValue = type === "checkbox" ? checked : value;

    if (name === "phone") {
      nextValue = String(nextValue).replace(/\D/g, "").slice(0, 10);
    }

    setForm((prev) => ({ ...prev, [name]: nextValue }));
  };

  const handleAgeGroupChange = (value) => {
    setForm((prev) => ({
      ...prev,
      ageGroup: value,
      hasDisability: value === "65plus" ? "" : prev.hasDisability,
    }));
  };

  const toggleMultiSelect = (field, value) => {
    setForm((prev) => {
      const current = prev[field];
      let next;

      if (value === "None of these") {
        next = current.includes(value) ? [] : ["None of these"];
      } else {
        const withoutNone = current.filter((item) => item !== "None of these");
        next = withoutNone.includes(value)
          ? withoutNone.filter((item) => item !== value)
          : [...withoutNone, value];
      }

      return { ...prev, [field]: next };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const digitsOnlyPhone = form.phone.replace(/\D/g, "");
    if (digitsOnlyPhone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    if (form.ageGroup === "under65" && !form.hasDisability) {
      alert("Please let us know if you are living with a disability.");
      return;
    }
    if (form.livingSituation.length === 0) {
      alert("Please select at least one option under Support & Living Situation.");
      return;
    }
    if (!form.needsNursingCare) {
      alert("Please answer whether you require ongoing skilled nursing care.");
      return;
    }
    if (!form.consent) {
      alert("Please provide consent so we can review your application.");
      return;
    }

    const data = {
      access_key: ACCESS_KEY,
      subject: "New Complimentary Companion Care Program Application",
      form_name: "Companion_Care_Program_Application",
      full_name: form.fullName,
      phone: digitsOnlyPhone,
      email: form.email || "Not provided",
      city_of_residence: form.city,
      age_confirmation: form.ageGroup === "65plus" ? "65 or older" : "Under 65",
      living_with_disability:
        form.ageGroup === "under65" ? (form.hasDisability === "yes" ? "Yes" : "No") : "N/A",
      support_and_living_situation: form.livingSituation.join(", "),
      requires_skilled_nursing_care: form.needsNursingCare === "yes" ? "Yes" : "No",
      current_circumstances: form.circumstances.join(", ") || "None provided",
      additional_info: form.additionalInfo || "None provided",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (json.success) {
        setSuccessMessage("Application submitted successfully.");

        window.gtag?.("event", "form_submit", {
          event_category: "lead",
          event_label: "Companion_Care_Program_Application",
          form_name: "Companion_Care_Program_Application",
        });

        setForm(initialForm);
        navigate("/thanks");
      } else {
        alert(
          "Something went wrong submitting your application. Please try again or call us at 604-613-1246."
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert(
        "Something went wrong submitting your application. Please try again or call us at 604-613-1246."
      );
    }
  };

  return (
    <div className="ccp-page">
      <Helmet>
        <title>Complimentary Companion Care Program | Mercy Manor</title>
        <meta
          name="description"
          content="Mercy Manor is opening five spots in our Complimentary Companion Care Program for Surrey neighbours 65+ or living with a disability. Apply today."
        />
        <link rel="canonical" href="https://www.mercymanor.ca/companion-care-program" />
      </Helmet>

      <header className="ccp-header">
        <div className="ccp-wrap ccp-header-inner">
          <div className="ccp-header-logo">
            <img src={Logo} alt="Mercy Manor Health Care" />
          </div>
          <div className="ccp-header-contact">
            <a href="tel:+16046131246" className="ccp-header-phone">
              <span className="ccp-phone-icon">
                <ProgramIcon name="phone" />
              </span>
              604-613-1246
            </a>
            <p className="ccp-header-areas">Serving Surrey, Abbotsford, Chilliwack &amp; Agassiz</p>
          </div>
        </div>
      </header>

      <section className="ccp-hero">
        <div className="ccp-wrap ccp-hero-inner">
          <div className="ccp-hero-text">
            <span className="ccp-badge">A Special Opportunity for Five Surrey Neighbours</span>
            <h1>
              Complimentary Companion Care <span className="ccp-orange-text">Program</span>
            </h1>
            <p className="ccp-hero-subtitle">We arrive as neighbours. We stay as family.</p>
            <p className="ccp-hero-para">
              At Mercy Manor, we believe everyone deserves compassionate support, meaningful
              companionship, and the chance to stay safely and comfortably at home.
            </p>
            <p className="ccp-hero-para">
              To give back to our community, we're opening five spots in our Complimentary
              Companion Care Program - a full companion care experience, offered simply because
              it's the right thing to do for our neighbours.
            </p>
            <a href="#apply-form" className="ccp-hero-cta" onClick={scrollToForm}>
              <ProgramIcon name="heart" /> Apply Now
            </a>
          </div>
          <div className="ccp-hero-image-wrap">
            <img
              src={heroImg}
              alt="Mercy Manor caregiver sharing a warm moment with a senior client at home"
            />
          </div>
        </div>
      </section>

      <section className="ccp-main">
        <div className="ccp-wrap ccp-main-grid">
          <div className="ccp-content">
            <div className="ccp-card">
              <h2 className="ccp-card-title">What's Included</h2>
              <div className="ccp-included-grid">
                {INCLUDED_ITEMS.map((item) => (
                  <div className="ccp-included-item" key={item.label}>
                    <div className="ccp-included-icon">
                      <ProgramIcon name={item.icon} />
                    </div>
                    <div className="ccp-included-label">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="ccp-card ccp-details-card">
              <h2 className="ccp-card-title">Program Details</h2>
              <div className="ccp-details-strip">
                <div className="ccp-detail-item">
                  <div className="ccp-detail-icon">
                    <ProgramIcon name="clock" />
                  </div>
                  <div className="ccp-detail-value">Up to 6 hours</div>
                  <div className="ccp-detail-label">of companion care</div>
                </div>
                <div className="ccp-detail-item">
                  <div className="ccp-detail-icon">
                    <ProgramIcon name="calendar" />
                  </div>
                  <div className="ccp-detail-value">Over three</div>
                  <div className="ccp-detail-label">visits</div>
                </div>
                <div className="ccp-detail-item">
                  <div className="ccp-detail-icon">
                    <ProgramIcon name="check" />
                  </div>
                  <div className="ccp-detail-value">Services used within</div>
                  <div className="ccp-detail-label">30 days of enrolment</div>
                </div>
              </div>
            </div>

            <div className="ccp-split-grid">
              <div className="ccp-apply-card">
                <h2 className="ccp-card-title">Who Can Apply</h2>
                <ul className="ccp-apply-list">
                  {WHO_CAN_APPLY.map((item) => (
                    <li key={item}>
                      <ProgramIcon name="check" className="ccp-apply-check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ccp-how-card">
                <h2 className="ccp-card-title">How It Works</h2>
                <div className="ccp-how-icon">
                  <ProgramIcon name="people" />
                </div>
                <p>
                  Every applicant is reviewed against our eligibility criteria.{" "}
                  <strong>The first five applicants who qualify</strong> are welcomed into the
                  program - simple as that.
                </p>
              </div>
            </div>

            <div className="ccp-urgency">
              <div className="ccp-urgency-icon">
                <ProgramIcon name="hands" />
              </div>
              <div>
                <p className="ccp-urgency-title">
                  Spaces are limited to five and going quickly - apply today to secure your spot.
                </p>
                <p className="ccp-urgency-sub">
                  Those people next door - the ones you can always count on.
                </p>
              </div>
            </div>

            <div className="ccp-card ccp-about-card">
              <h2 className="ccp-card-title">About Our Community</h2>
              <p>
                Mercy Manor is a trusted local home care provider dedicated to helping seniors and
                adults live safely and comfortably at home.
              </p>
              <p>
                We are proud to serve{" "}
                <a href="/areas" className="ccp-about-link">
                  our neighbours
                </a>{" "}
                in:
              </p>
              <div className="ccp-area-pills">
                {CITY_OPTIONS.slice(0, 4).map((city) => (
                  <span className="ccp-area-pill" key={city}>
                    <ProgramIcon name="pin" /> {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="ccp-sidebar">
            <div className="ccp-form-card" id="apply-form">
              <div className="ccp-form-header">
                <div className="ccp-form-header-icon">
                  <ProgramIcon name="clip" />
                </div>
                <div>
                  <h2>Apply Now</h2>
                  <p>Complimentary Companion Care Program</p>
                </div>
              </div>

              <div className="ccp-form-body">
                {successMessage && <div className="ccp-alert-success">{successMessage}</div>}

                <form onSubmit={handleSubmit}>
                  <div className="ccp-field">
                    <label className="ccp-label" htmlFor="fullName">
                      Full Name <span className="ccp-required">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      className="ccp-input"
                      placeholder="Enter your full name"
                      value={form.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="ccp-field-row">
                    <div className="ccp-field">
                      <label className="ccp-label" htmlFor="phone">
                        Phone Number <span className="ccp-required">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        className="ccp-input"
                        placeholder="(604) 123-4567"
                        inputMode="numeric"
                        pattern="[0-9]{10}"
                        maxLength="10"
                        value={form.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="ccp-field">
                      <label className="ccp-label" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        className="ccp-input"
                        placeholder="you@email.com"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="ccp-field">
                    <label className="ccp-label" htmlFor="city">
                      City of Residence <span className="ccp-required">*</span>
                    </label>
                    <select
                      id="city"
                      name="city"
                      className="ccp-select"
                      value={form.city}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select your city
                      </option>
                      {CITY_OPTIONS.map((city) => (
                        <option value={city} key={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="ccp-field">
                    <label className="ccp-label">
                      Age Confirmation <span className="ccp-required">*</span>
                    </label>
                    <div className="ccp-radio-group">
                      <label className="ccp-radio-option">
                        <input
                          type="radio"
                          name="ageGroup"
                          value="65plus"
                          checked={form.ageGroup === "65plus"}
                          onChange={() => handleAgeGroupChange("65plus")}
                        />
                        65 or older
                      </label>
                      <label className="ccp-radio-option">
                        <input
                          type="radio"
                          name="ageGroup"
                          value="under65"
                          checked={form.ageGroup === "under65"}
                          onChange={() => handleAgeGroupChange("under65")}
                        />
                        Under 65
                      </label>
                    </div>
                  </div>

                  <div className="ccp-field">
                    <label className="ccp-label">
                      Living with a Disability? <span className="ccp-required">*</span>
                      <span className="ccp-hint">
                        {form.ageGroup === "under65"
                          ? 'Required because "Under 65" is selected'
                          : 'Shown only if "Under 65" is selected'}
                      </span>
                    </label>
                    <div
                      className={`ccp-radio-group ccp-conditional-group ${
                        form.ageGroup !== "under65" ? "is-disabled" : ""
                      }`}
                    >
                      <label className="ccp-radio-option">
                        <input
                          type="radio"
                          name="hasDisability"
                          value="yes"
                          checked={form.hasDisability === "yes"}
                          onChange={handleChange}
                          required={form.ageGroup === "under65"}
                          disabled={form.ageGroup !== "under65"}
                        />
                        Yes
                      </label>
                      <label className="ccp-radio-option">
                        <input
                          type="radio"
                          name="hasDisability"
                          value="no"
                          checked={form.hasDisability === "no"}
                          onChange={handleChange}
                          disabled={form.ageGroup !== "under65"}
                        />
                        No
                      </label>
                    </div>
                  </div>

                  <div className="ccp-field">
                    <label className="ccp-label">
                      Support &amp; Living Situation <span className="ccp-required">*</span>
                    </label>
                    <div className="ccp-checkbox-group">
                      {LIVING_SITUATION_OPTIONS.map((option) => (
                        <label className="ccp-checkbox-option" key={option}>
                          <input
                            type="checkbox"
                            checked={form.livingSituation.includes(option)}
                            onChange={() => toggleMultiSelect("livingSituation", option)}
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="ccp-field">
                    <label className="ccp-label">
                      Do you require ongoing skilled nursing care?{" "}
                      <span className="ccp-required">*</span>
                      <span className="ccp-hint">(Program is non-medical only)</span>
                    </label>
                    <div className="ccp-radio-group">
                      <label className="ccp-radio-option">
                        <input
                          type="radio"
                          name="needsNursingCare"
                          value="yes"
                          checked={form.needsNursingCare === "yes"}
                          onChange={handleChange}
                          required
                        />
                        Yes
                      </label>
                      <label className="ccp-radio-option">
                        <input
                          type="radio"
                          name="needsNursingCare"
                          value="no"
                          checked={form.needsNursingCare === "no"}
                          onChange={handleChange}
                        />
                        No
                      </label>
                    </div>
                  </div>

                  <div className="ccp-field">
                    <label className="ccp-label">Current Circumstances (optional)</label>
                    <div className="ccp-checkbox-group">
                      {CIRCUMSTANCE_OPTIONS.map((option) => (
                        <label className="ccp-checkbox-option" key={option}>
                          <input
                            type="checkbox"
                            checked={form.circumstances.includes(option)}
                            onChange={() => toggleMultiSelect("circumstances", option)}
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="ccp-field">
                    <label className="ccp-label" htmlFor="additionalInfo">
                      Anything else you'd like us to know? (optional)
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      className="ccp-textarea"
                      placeholder="Your message here..."
                      value={form.additionalInfo}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="ccp-field ccp-field-consent">
                    <label className="ccp-label">
                      Privacy Consent <span className="ccp-required">*</span>
                    </label>
                  </div>

                  <label className="ccp-consent">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={form.consent}
                      onChange={handleChange}
                      required
                    />
                    <span>
                      I consent to Mercy Manor collecting this information to assess my eligibility,
                      per the <a href="/privacy-policy">Privacy Policy</a>.
                    </span>
                  </label>

                  <button type="submit" className="ccp-submit-btn">
                    Submit Application <ProgramIcon name="send" />
                  </button>
                  <p className="ccp-secure-note">
                    <ProgramIcon name="lock" /> Your information is secure and confidential.
                  </p>
                </form>
              </div>
            </div>

            <div className="ccp-sidebar-image">
              <img
                src={sidebarImg}
                alt="Mercy Manor caregiver walking with a senior client outdoors"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="ccp-footer">
        <div className="ccp-wrap ccp-footer-inner">
          <div className="ccp-footer-contact">
            <div className="ccp-footer-contact-icon">
              <ProgramIcon name="phone" />
            </div>
            <div>
              <strong>Have questions? We're here to help.</strong>
              <span>Call us today to learn more about our services.</span>
            </div>
          </div>
          <a href="tel:+16046131246" className="ccp-footer-phone">
            604-613-1246
          </a>
          <div className="ccp-footer-logo">
            <img src={Logo} alt="Mercy Manor Health Care" />
          </div>
        </div>
        <div className="ccp-wrap ccp-footer-bottom">
          © 2026 Mercy Manor Health Care. All rights reserved.
          <span>|</span> Privacy Policy <span>|</span> Terms of Service
        </div>
      </footer>
    </div>
  );
}

export default CompanionCareProgram;
