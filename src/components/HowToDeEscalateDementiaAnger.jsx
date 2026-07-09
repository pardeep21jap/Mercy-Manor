import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import exercise from '../assets/exercise.webp';
import Cta from '../components/Cta';

function HowToDeEscalateDementiaAnger() {
  useEffect(() => {
    document.title = 'How to De-Escalate Dementia Anger | Mercy Manor Home Care';
  }, []);
  return (
    <div>
      <Banner
        title="How to De-Escalate Dementia Anger"
        bannerImage={exercise}
      />
      <section id="blog-post-content" style={{ padding: '40px 15px' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>How to De-Escalate Dementia Anger in the First 10 Seconds</h1>
              <span className='blog-date' style={{ display: 'block', marginBottom: '20px', color: '#888' }}>21-02-2026</span>
              <img src={exercise} alt="Caregiver supporting an elderly person with dementia at home" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />

              <p className='allp'>Caring for a loved one with dementia can be deeply meaningful—and incredibly challenging. When anger or agitation rises, it can feel sudden and overwhelming. The truth is, you may not always be able to stop a dementia-related outburst. But you can prevent it from escalating. The first 10 seconds matter most.</p>

              <h3 style={{ marginTop: '30px' }}>1. Do Not Fuel the Fire</h3>
              <p className='allp'>When emotions rise, our instinct is often to correct, explain, or defend. With dementia, that usually makes things worse. Instead:</p>
              <ul>
                <li><strong>Stay calm.</strong> Your calm presence can be reassuring. Take a deep breath.</li>
                <li><strong>Don't argue or try to reason.</strong> The part of the brain responsible for logic is compromised. Arguing will only increase agitation.</li>
                <li><strong>Listen to what they are saying,</strong> even if it doesn't make sense. Validate their feelings by saying something like, "That sounds really frustrating," or "I can see you're upset."</li>
              </ul>

              <h3 style={{ marginTop: '30px' }}>2. Change the Environment</h3>
              <p className='allp'>Sometimes a simple change can diffuse the situation. Move to a different room, go for a short walk if it's safe, or reduce noise and distractions like a loud TV.</p>

              <h3 style={{ marginTop: '30px' }}>3. Redirect and Distract</h3>
              <p className='allp'>Gently shift their focus to a pleasant activity or topic. You could suggest listening to their favorite music, looking at old photos, or offering a favorite snack. The goal is to move their attention away from the source of anger.</p>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </div>
  );
}

export default HowToDeEscalateDementiaAnger;