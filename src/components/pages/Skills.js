import React from 'react';
import { animationOne} from '../../components/animations';
import { motion } from 'framer-motion';



function Skills() {
  return (

    <motion.div
      initial='out' animate='in' exit='out' variants={animationOne} transition='transition'
    >


    <div className='container'>

      <div className='logo-wrapper'>
        <div className='fn-wrap' data-aos='slide-right' data-aos-delay='150' data-aos-easing='ease-in-out'>
          <span className='logo-main'><b>M</b></span>
          <span className='logo-letter'><b>y</b></span>
          <span className='logo-letter'><b> </b></span>
          <span className='logo-main'><b>S</b></span>
          <span className='logo-letter'><b>k</b></span>
          <span className='logo-letter'><b>i</b></span>
          <span className='logo-letter'><b>l</b></span>
          <span className='logo-letter'><b>l</b></span>
          <span className='logo-letter'><b>s</b></span>
        </div>
      </div>


      <section>

      <div className='writing-container'>
        <div className='writing-wrapper-two'>

          <div className='writing-box'>
          <h2>HTML / CSS / React</h2>
          <p>I've been practising HTML, CSS and Javascript for close to 8 years now and I continue to do so, developing more
          and more every day. I'm closely familiar with HTML and CSS principles, priding myself on designing pleasant to look at
          websites. I'm practised in creating comfortable user experiences to deliver the best possible website using the essential
          languages of the web, and much more.</p>
          </div>


          <div className='writing-box'>
          <h2>Front end development</h2>
          <p>I'm capable of creating repsonsive websites that follow your specifications. I can create simple and elegant React web applications,
          resulting in fast and interactive websites. Incorporating React-Router for instant simple page loading.
          I use Framer-motion to create custom page transitions and on scroll animations.</p>
          </div>

        </div>
      </div>

      </section>


    </div>

    </motion.div>

  )
}

export default Skills
