import React from 'react'
import "./Process.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1 } from "@fortawesome/free-solid-svg-icons";
import { fa2 } from "@fortawesome/free-solid-svg-icons";
import { fa3 } from "@fortawesome/free-solid-svg-icons";
import { fa4 } from "@fortawesome/free-solid-svg-icons";
import pro1 from '../assets/pro1.jpeg';
import pro2 from '../assets/pro2.jpeg';
import pro3 from '../assets/pro3.png';
import pro4 from '../assets/pro4.jpeg';
function Process() {
  return (
    <div>
      <section id='process-section'>
        <div className="container">
          <div className="outer-process">
            <div className="inner-process">
              <h2 className='all-heading cen-heading'>our process</h2>
              <h3 className='subtitle'>A step-by-step approach to personalized care</h3>


              <div className="process-tabs">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Initial Assessment<br></br> <FontAwesomeIcon icon={fa1} className='pro-icon' /></button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Personalized Care<br></br> <FontAwesomeIcon icon={fa2} className='pro-icon' /></button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Caregiver Assignment<br></br><FontAwesomeIcon icon={fa3} className='pro-icon' /></button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-service" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Client Feedback<br></br><FontAwesomeIcon icon={fa4} className='pro-icon' /></button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">

                  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                    <div className="protext">
                      <p className='allp'>
                        At Mercy Manor Health Care, our process begins with a thorough assessment conducted by a registered nurse. During this initial evaluation, we carefully review the client’s specific needs, medical history, and personal preferences. This detailed assessment allows us to create a tailored care plan that ensures each individual receives the right support, attention, and medical oversight from the very beginning.Every client’s journey with us begins with a comprehensive assessment conducted by a registered nurse. During this process, the nurse carefully evaluates the client’s medical history, current health condition, and individual needs. This thorough assessment ensures that each care plan is tailored specifically to the client, providing the right support, attention, and guidance from the very start. Our goal is to create a strong foundation for safe, effective, and personalized care.
                      </p>
                    </div>

                    <div className="proimage">

                      <img src={pro1} alt="" />
                    </div>

                  </div>

                  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div className="protext">
                      <p className='allp'>
                        At Mercy Manor Health Care, we are deeply committed to delivering client-centered care that respects the individuality, dignity, and preferences of each person we serve. Our approach begins with a comprehensive initial assessment, during which our registered nurse meets personally with the client and their family.
                        This meeting allows us to understand the client’s unique needs, medical conditions, lifestyle, and personal goals. Based on this thorough assessment, we develop a customized care plan—one that is specifically tailored to promote comfort, independence, and overall well-being.
                        We believe that quality care is built on collaboration, compassion, and trust. By involving clients and their families in every step of the care planning process, we ensure that our services not only meet but exceed their expectations.

                      </p>
                    </div>

                    <div className="proimage">

                      <img src={pro3} alt="" />
                    </div>


                  </div>

                  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <div className="protext">
                      <p className='allp'>
                        Mercy Manor is deeply committed to providing safe, high-quality, and compassionate care to every client we serve. We recognize that each individual deserves services that promote comfort, dignity, and well-being. To ensure this, we maintain the highest standards of safety and professionalism in all aspects of our care delivery.

                        Our caregivers are highly trained and experienced professionals with a strong background in the Canadian healthcare industry. They undergo continuous education and skill enhancement to stay updated with best practices, safety protocols, and client care standards. This ensures that every service we provide — whether in personal care, companionship, or specialized support — meets the expectations of both clients and their families.
                        At Mercy Manor, quality care is not just our promise, but our practice — built on respect, reliability, and a genuine commitment to improving the lives of those we serve.

                      </p>

                    </div>

                    <div className="proimage">

                      <img src={pro2} alt="" />
                    </div>

                  </div>

                  <div className="tab-pane fade" id="pills-service" role="tabpanel" aria-labelledby="pills-service-tab">
                    <div className="protext">
                      <p className='allp'>
                        Mercy Manor is committed to delivering the highest quality of care and services to our clients. We believe that true quality comes from understanding and responding to the unique needs, preferences, and expectations of those we serve. To ensure this, we place great importance on maintaining open and ongoing communication with our clients and their families.
                        We actively seek continuous feedback through regular meetings and informal conversations, allowing us to assess client satisfaction and identify areas for improvement. This collaborative approach ensures that clients and their families have a voice in shaping the care they receive. By listening carefully and responding promptly to their input, we strengthen trust, enhance the quality of our services, and create a supportive environment where every client feels valued, respected, and cared for.

                      </p>
                    </div>

                    <div className="proimage">

                      <img src={pro4} alt="" />
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>


      </section>


      {/* 
      <section id='new-process-section'>
        <div className="conatiner">
          <div className="newprocess-outer">
            <div className="newprocess-inner">


              <div className="newprocess-content">
                <ul>
                  <li>
                    <img src="./src/assets/Images/pro2.jpeg" alt="" />
                    <span class="badge badge-pill badge-primary own-badge">1</span>
                    <h3>step1</h3>
                    <p className='allp'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ut odit placeat esse tempore eaque sint pariatur nobis vel velit, ad ipsa repellendus incidunt nesciunt provident exercitationem architecto optio maiores.</p>
                    <FontAwesomeIcon icon={faTurnDown} className='arrow-icon' />
                  </li>
                   <li>
                    <img src="./src/assets/Images/pro2.jpeg" alt="" />
                    <span class="badge badge-pill badge-primary own-badge">1</span>
                    <h3>step1</h3>
                    <p className='allp'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ut odit placeat esse tempore eaque sint pariatur nobis vel velit, ad ipsa repellendus incidunt nesciunt provident exercitationem architecto optio maiores.</p>
                    <FontAwesomeIcon icon={faTurnDown} className='arrow-icon' />
                  </li>
                   <li>
                    <img src="./src/assets/Images/pro2.jpeg" alt="" />
                    <span class="badge badge-pill badge-primary own-badge">1</span>
                    <h3>step1</h3>
                    <p className='allp'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ut odit placeat esse tempore eaque sint pariatur nobis vel velit, ad ipsa repellendus incidunt nesciunt provident exercitationem architecto optio maiores.</p>
                    <FontAwesomeIcon icon={faTurnDown} className='arrow-icon' />
                  </li>
                   <li>
                    <img src="./src/assets/Images/pro2.jpeg" alt="" />
                    <span class="badge badge-pill badge-primary own-badge">1</span>
                    <h3>step1</h3>
                    <p className='allp'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ut odit placeat esse tempore eaque sint pariatur nobis vel velit, ad ipsa repellendus incidunt nesciunt provident exercitationem architecto optio maiores.</p>
                    <FontAwesomeIcon icon={faTurnDown} className='arrow-icon' />
                  </li>
                </ul>

              </div>

            </div>
          </div>
        </div>
      </section> */}

    </div>
  )
}

export default Process
