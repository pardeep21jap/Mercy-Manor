import React from 'react'
import "./Gmap.css"
function Gmap() {
  return (
    <div>
      <iframe
        title="Mercy Manor location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.354973234496!2d-122.8397248231067!3d49.12456348193759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485da4aa9c013af%3A0x3fb439530e088594!2s13900%20Hyland%20Rd%20%23113%2C%20Surrey%2C%20BC%20V3W%201K4!5e1!3m2!1sen!2sca!4v1765398671037!5m2!1sen!2sca"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default Gmap
