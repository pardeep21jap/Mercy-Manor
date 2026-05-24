import React from 'react'

function Abbotsfordmap() {
  return (
    <div>
      <div className='Abbotsford-map'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83615.17771545895!2d-122.35006837137789!3d49.087128601314745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548435c6706ab783%3A0x50135152a7b0560!2sAbbotsford%2C%20BC!5e0!3m2!1sen!2sca!4v1773354273595!5m2!1sen!2sca"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default Abbotsfordmap
