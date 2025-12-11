import React from 'react'

import "./blogcon.css"

import exercise from '../assets/exercise.png';

function blogcon() {
  return (
    <div>
      <section id='blog-section'>
        <div className="container">
          <div className="blog-outer">
            <div className="blog-inner">


              {/* 1-blog */}
              <div className="main-blog">

                <div className="blog-image">
                  <img src={exercise} alt="" />
                </div>

                <div className='blog-content'>
                  <h2>10 Reasons to Choose Mercy Manor Healthcare Services for Your Loved Ones</h2>

                  <p className='allp'>Choosing the right healthcare provider for your loved ones is a critical decision. At Mercy Manor Healthcare Services, we are committed to delivering high-quality care, ensuring comfort, safety, and well-being for every patient. Families trust us because we combine professional expertise, compassion, and state-of-the-art services to meet every patient’s needs.

                    Here are ten compelling reasons why Mercy Manor stands out:</p>
                  <a href="#">Read More...</a>

                </div>





              </div>

              <div className="main-blog">

                <div className="blog-image">
                  <img src={exercise} alt="" />
                </div>

                <div className='blog-content'>
                  <h2>10 Reasons to Choose Mercy Manor Healthcare Services for Your Loved Ones</h2>

                  <p className='allp'>Choosing the right healthcare provider for your loved ones is a critical decision. At Mercy Manor Healthcare Services, we are committed to delivering high-quality care, ensuring comfort, safety, and well-being for every patient. Families trust us because we combine professional expertise, compassion, and state-of-the-art services to meet every patient’s needs.

                    Here are ten compelling reasons why Mercy Manor stands out:</p>
                  <a href="#">Read More...</a>

                </div>





              </div>


              <div className="main-blog">

                <div className="blog-image">
                  <img src={exercise} alt="" />
                </div>

                <div className='blog-content'>
                  <h2>10 Reasons to Choose Mercy Manor Healthcare Services for Your Loved Ones</h2>

                  <p className='allp'>Choosing the right healthcare provider for your loved ones is a critical decision. At Mercy Manor Healthcare Services, we are committed to delivering high-quality care, ensuring comfort, safety, and well-being for every patient. Families trust us because we combine professional expertise, compassion, and state-of-the-art services to meet every patient’s needs.

                    Here are ten compelling reasons why Mercy Manor stands out:</p>
                  <a href="#">Read More...</a>

                </div>





              </div>

              <div className="numbering">
                <ul>
                  <li>
                    <a href="">1</a>
                  </li>
                  <li>
                    <a href="">2</a>
                  </li>
                  <li>
                    <a href="">3</a>
                  </li>
                  <li>
                    <a href="">4</a>
                  </li>
                </ul>
              </div>


            </div>


          </div>
        </div>
      </section>
    </div>
  )
}

export default blogcon
