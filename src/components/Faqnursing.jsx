import React from 'react'

function Faqnursing() {
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
                         Who can benefit from nursing care services?
                          </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <p className='allp'>At Mercy Manor Health Care Limited Seniors, iSeniors, individuals with chronic illnesses, post-surgery patients, people with disabilities, or anyone requiring skilled medical care can benefit from nursing services.</p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Are nursing care services available at home?
                          </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <p className='allp'>
                             Yes. Nursing care can be provided at home, allowing clients to receive professional medical support in a familiar and comfortable environment.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                         What tasks do nurses perform in home care?
                          </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <p className='allp'>
                            Nurses can administer medications, monitor vital signs, manage chronic conditions, provide wound care, assist with mobility, support rehabilitation, and educate clients and families on health management.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                           Are nursing care services available 24/7?
                          </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <p className='allp'>
                            Depending on the provider, nursing care can be scheduled for hourly visits, daily care, or round-the-clock support to meet the client’s needs.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                           Can nurses help with post-surgery recovery?
                          </button>
                        </h2>
                        <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <p className='allp'>
                              Absolutely. Nurses assist with wound care, medication, mobility, rehabilitation exercises, and monitoring to ensure a safe and effective recovery.
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

export default Faqnursing
