import React from 'react'
import "./Faqdementia.css"

function Faqcompanion() {
  return (
    <div>
      <section id='faq-dementia'>
        <div className="container">
          <div className="faqdementia-outer">
            <div className="faqdementia-inner">
              <h2 className='all-heading cen-heading'>Frequently Asked Questions</h2>
              <div className="main-faqdementia">
                <div className="row faqcontet dementia-faq">

                  <div className="col-6 faq-image">
                    <img src="./src/assets/Images/faq.jpeg" alt="" />
                  </div>

                  <div className="col-6 faq-accordion">
                    <div class="accordion" id="accordionExample">
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           What is companion care?
                          </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <p className='allp'>At Mercy Manor Health Care Limited Companion care is a non-medical service designed to provide social interaction, emotional support, and assistance with daily tasks. It helps individuals, especially seniors or those living alone, maintain independence, stay active, and improve their overall quality of life.</p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                           Who can benefit from companion care?
                          </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <p className='allp'>
                             Anyone who needs companionship, support with daily activities, or help staying engaged can benefit. This includes seniors, people recovering from illness, individuals with disabilities, or anyone feeling isolated at home.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                           What services does companion care include?
                          </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <p className='allp'>
                             Services typically include social interaction, light housekeeping, meal preparation, transportation to appointments, assistance with daily routines, safety monitoring, and encouragement for mental and physical activity.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          Is companion care medical care?
                          </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <p className='allp'>
                              No, companion care is non-medical. Caregivers provide support with daily living, social engagement, and safety, but they do not perform medical procedures or administer medications.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            How often can companion care be provided?
                          </button>
                        </h2>
                        <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <p className='allp'>
                              Companion care can be customized to meet individual needs, ranging from a few hours per week to full-time daily support. Scheduling is flexible based on the client’s lifestyle and family requirements.
                            </p>
                          </div>
                        </div>
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

export default Faqcompanion
