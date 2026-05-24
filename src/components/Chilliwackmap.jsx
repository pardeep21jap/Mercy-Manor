import React from 'react'

function Chilliwackmap() {
  return (
    <div>
      <div className='chilliwack-map'>
        <iframe
          title="Chilliwack map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83530.62584169576!2d-122.03225641917612!3d49.13731949505258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54843f9d75e9f3a7%3A0x1d49386fd2f9a230!2sChilliwack%2C%20BC!5e0!3m2!1sen!2sca!4v1773367789512!5m2!1sen!2sca"
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

export default Chilliwackmap
