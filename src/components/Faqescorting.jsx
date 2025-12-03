import React from 'react'
import "./Faqdementia.css"

function Faqescorting() {
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
                            What are escorting client services?
                          </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <p className='allp'>At Mercy Manor Health Care Limited Escorting client services provide safe, supportive transportation and in-person assistance for individuals who need help traveling to appointments, errands, social events, or community activities. Caregivers accompany clients throughout the entire outing to ensure comfort and safety.</p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Who can benefit from escorting services?
                          </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <p className='allp'>
                              These services are ideal for seniors, individuals with disabilities, people who have mobility challenges, or anyone who feels uncomfortable traveling alone. It’s also helpful for clients recovering from illness or surgery.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Do caregivers stay with the client during the appointment?
                          </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <p className='allp'>
                              Yes. Caregivers stay with clients from the moment they leave home until they return. They can assist with check-ins, paperwork, navigating facilities, and offering companionship throughout the visit.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            What types of outings can caregivers assist with?
                          </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <p className='allp'>
                              Caregivers can escort clients to medical appointments, therapy sessions, grocery stores, family visits, religious services, social events, and community activities.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            How does this service benefit family members?
                          </button>
                        </h2>
                        <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <p className='allp'>
                              Families gain peace of mind knowing their loved ones have safe transportation, support, and companionship—especially when they cannot attend appointments themselves.
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

export default Faqescorting
