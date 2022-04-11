import React from 'react';
import { motion } from 'framer-motion';
import { animationTwo} from '../../components/animations';
import '../../components/About.css';

function About() {
  return (
    <motion.div
      initial='out' animate='in' exit='out' variants={animationTwo} transition='transition'
    >
      <div className='container'>
        <div className='logo-wrapper'>
          <div className='sub-text'>&lt;hover&gt;</div>

          <div className='first-set-wrap'>
            <div className='fn-wrap' data-aos='slide-left' data-aos-delay='150' data-aos-easing='ease-in-out'>
              <span className='logo-main'><b>Y</b></span>
              <span className='logo-letter'><b>o</b></span>
              <span className='logo-letter'><b>u</b></span>
              <span className='logo-letter'><b>r</b></span>
              <span className='logo-letter'><b>s</b></span>
              <span className='logo-letter'><b> </b></span>
              <span className='logo-main'><b>T</b></span>
              <span className='logo-letter'><b>r</b></span>
              <span className='logo-letter'><b>u</b></span>
              <span className='logo-letter'><b>l</b></span>
              <span className='logo-letter'><b>y</b></span>
            </div>
          </div>
          <div className='sub-text'>&lt;/hover&gt;</div>
        </div>


        <section>

        <div className='writing-container'>
          <div className='writing-wrapper'>
            <div className='writing-box'>
            <h2>Inspiration</h2>
            <p>My biggest inspiration was a teacher I had in high school. I wasn't overly motivated with 'hello world' as most are,
            but when I first got a blue box to appear on the screen with my first CSS styling all the way back in 2015. That was what got me hooked and I've never
            looked back and continued to grow and develop my skills since.</p>
            </div>

            <div className='writing-box'>
            <h2>Freelancing</h2>
            <p>I haven't been involved in commercial useage of my skills for very long but I've worked on multiple projects for some companys and have am continuing to
            develop my skills in a professional setting.</p>
            </div>

            <div className='writing-box'>
            <h2>Goals as a developer</h2>
            <p>My goals as a developer is to learn as much as humanly possible. I want to keep making stylish websites and love making things work.
            I'm always trying to learn new tricks and style options to make the best possible choices when designing and coding a website.
            </p>
            </div>

          </div>
        </div>

        </section>

      </div>
    </motion.div>
  )
}


export default About
