import React, { use } from 'react'

const Welcome = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
  return (
    <section id='welcome'>
     <p ref={subtitleRef}>Hey , Ich bin Daniel! Willkommen in mein</p>
        <h1 ref={titleRef} className='mt-7'>Portfolio</h1>

        <div className='smal-screen'>
            <p>Das ist designed für desktop/tabled nur screens.</p>
        </div>
    </section>
  )
}

export default Welcome;