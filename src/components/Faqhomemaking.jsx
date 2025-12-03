import React from 'react'
import "./Faqdementia.css"


function Faqhomemaking() {
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
                           Who can benefit from homemaking services?
                          </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <p className='allp'>At Mercy Manor Health Care Limited Seniors, individuals with disabilities, people recovering from illness or surgery, and anyone who struggles to manage household chores can benefit from homemaking support.</p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Are homemaking services the same as personal care services?
                          </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <p className='allp'>
                             No. Homemaking services focus on household tasks, while personal care involves hands-on assistance with activities like bathing, grooming, and mobility. Many clients use both services together.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          What tasks can a homemaking caregiver help with?
                          </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <p className='allp'>
                             Common tasks include light housekeeping, laundry, meal preparation, grocery shopping, trash removal, organization, and running errands. Some providers also offer basic pet care.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                           Is homemaking care considered medical care?
                          </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <p className='allp'>
                              No. Homemaking care is non-medical. Caregivers do not provide clinical treatments or administer medications but assist with household needs that support daily living.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Do homemaking services include cooking special diets?
                          </button>
                        </h2>
                        <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <p className='allp'>
                              Many caregivers can prepare meals according to dietary preferences or restrictions, such as low-sodium, diabetic-friendly, or soft foods.
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

export default Faqhomemaking
