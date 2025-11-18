import React from 'react'
import "./Faq.css"

function Faq() {
  return (
    <div>

      <section id='faq-section'>
        <div className="container">
          <div className="faq-outer">
            <h2 className='all-heading cen-heading'>Frequently Asked Questions</h2>
            <h3 className='subtitle'>Learn more about our care services, team, and how we support your loved ones</h3>
            
            <div className="row faqcontet">

              <div className="col-6 faq-image">
                <img src="./src/assets/Images/faq.jpeg" alt="" />
              </div>

              <div className="col-6 faq-accordion">
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Who are we?
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <p className='allp'>At Mercy Manor Health Care Limited We provide compassionate healthcare and home care services, supporting seniors and individuals who need assistance with daily living.</p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        What services do you offer?
                      </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <p className='allp'>
                          Our services include nursing care, companion care, medication assistance, home-making, escorting to appointments, indoor activities, light exercise, and dietary support.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        What makes your care different?
                      </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <p className='allp'>
                          We create personalized care plans tailored to each client’s health, preferences, and lifestyle, ensuring safety, comfort, and emotional support.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Are your caregivers trained?
                      </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <p className='allp'>
                          Yes! All our caregivers undergo rigorous training in elder care, dementia support, medication management, and mobility assistance. We prioritize safety, dignity, and comfort in every interaction.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        How can I get in touch or schedule a consultation?
                      </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <p className='allp'>
                          You can contact us through our website, phone, or email. We offer free consultations to understand your needs and recommend the most suitable care plan for you or your loved one.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>



          </div>
        </div>

      </section>

    </div>
  )
}

export default Faq
