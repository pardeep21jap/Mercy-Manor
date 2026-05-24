import React from 'react'

function Surreymap() {
  return (
    <div>
      <div className='surrey-map'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167148.9820469318!2d-122.96584442874372!3d49.1112854074751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485dc034d3fa75b%3A0xd28b4898abd598e0!2sSurrey%2C%20BC!5e0!3m2!1sen!2sca!4v1773268930550!5m2!1sen!2sca"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}

export default Surreymap
