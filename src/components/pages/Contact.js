import React from 'react';
import '../../components/Contact.css';
import { animationTwo} from '../../components/animations';
import '../../components/About.css';
import { motion } from 'framer-motion';

function Contact(){
  return (

    <motion.div
      initial='out' animate='in' exit='out' variants={animationTwo} transition='transition'
    >

    <div className="form_container">

    <div className='fn-wrap' data-aos='slide-right' data-aos-delay='150' data-aos-easing='ease-in-out'>
      <span className='logo-main'><b>G</b></span>
      <span className='logo-letter'><b>e</b></span>
      <span className='logo-letter'><b>t</b></span>
      <span className='logo-letter'><b> </b></span>
      <span className='logo-letter'><b>i</b></span>
      <span className='logo-letter'><b>n</b></span>
      <span className='logo-letter'><b> </b></span>
      <span className='logo-main'><b>T</b></span>
      <span className='logo-letter'><b>o</b></span>
      <span className='logo-letter'><b>u</b></span>
      <span className='logo-letter'><b>c</b></span>
      <span className='logo-letter'><b>h</b></span>
    </div>

    <form action='https://formsubmit.co/newberyjet@outlook.com' method='POST'>
        <input type='hidden' name='_subject' value='New request'/>
        <input type='hidden' name='_captcha' value='false'/>
        <input type="hidden" name="_next" value="http://jetnewbery.com"/>
      <div className='name-container'>
        <div className='fn-form-wrap'>
        <input className='form' type='name' name='First name' placeholder='First name' required/>
        </div>
        <div className='space'/>
        <div className='fn-form-wrap'>
        <input className='form' type='name' name='Last name' placeholder='Last name' required/>
        </div>
      </div>
      <div>
        <input className='form2' type='email' name='email' placeholder='Email' required/>
      </div>

      <div>
        <input className='form2' type='phone number' name='phone number' placeholder='Phone number' required/>
      </div>

      <div>
        <textarea className='message' type='text' name='Message' placeholder='Message' required/>
      </div>
      <button className='send' type='submit'> Send </button>
    </form>

    </div>

    </motion.div>

  )
}

export default Contact
