import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Content.css';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';



function Content() {
  return (
    <React.Fragment>
      <div className='container'>



        <div className='logo-wrapper'>
          <div className='sub-text'>&lt;hover&gt;</div>
        <div className='first-set-wrap'>



        <div className='fn-wrap' data-aos='slide-left' data-aos-delay='150' data-aos-easing='ease-in-out'>
          <span className='logo-main'><b>J</b></span>
          <span className='logo-letter'><b>e</b></span>
          <span className='logo-letter'><b>t</b></span>
        </div>

        <div className='ln-wrap' data-aos='slide-right' data-aos-delay='250' data-aos-easing='ease-in-out'>
          <span className='logo-main'><b>N</b></span>
          <span className='logo-letter'><b>e</b></span>
          <span className='logo-letter'><b>w</b></span>
          <span className='logo-letter'><b>b</b></span>
          <span className='logo-letter'><b>e</b></span>
          <span className='logo-letter'><b>r</b></span>
          <span className='logo-letter'><b>y</b></span>
        </div>
        <div className='fn-wrap' data-aos='slide-left' data-aos-delay='350' data-aos-easing='ease-in-out'>
          <span className='logo-main'><b>F</b></span>
          <span className='logo-letter'><b>r</b></span>
          <span className='logo-letter'><b>o</b></span>
          <span className='logo-letter'><b>n</b></span>
          <span className='logo-letter'><b>t</b></span>
          <span className='logo-letter'><b> - </b></span>
          <span className='logo-letter'><b>e</b></span>
          <span className='logo-letter'><b>n</b></span>
          <span className='logo-letter'><b>d</b></span>
          <span className='logo-letter'><b> - </b></span>
          <span className='logo-main'><b>D</b></span>
          <span className='logo-letter'><b>e</b></span>
          <span className='logo-letter'><b>v</b></span>
          <span className='logo-letter'><b>e</b></span>
          <span className='logo-letter'><b>l</b></span>
          <span className='logo-letter'><b>o</b></span>
          <span className='logo-letter'><b>p</b></span>
          <span className='logo-letter'><b>e</b></span>
          <span className='logo-letter'><b>r</b></span>
        </div>
      </div>

      <div className='second-set-wrap'>



      </div>
      <div className='sub-text'>&lt;/hover&gt;</div>
        </div>

<Link to={{ pathname: "https://github.com/NewberyJ?tab=repositories" }} target="_blank" >
  <div className='git-container'>
    <img src='./images/GitHub-Mark-64px.png' />
  </div>
</Link>


        <div className='sub-container'>

        <div className='sub-text'>&lt;body&gt;</div>
        <div className='sub-text'>&lt;h2&gt;</div>
          <div className='fn-wrap' data-aos='slide-left'>
            <span className='logo-main'><b>M</b></span>
            <span className='logo-letter'><b>y</b></span>
            <span className='logo-letter'><b> </b></span>
            <span className='logo-main'><b>P</b></span>
            <span className='logo-letter'><b>r</b></span>
            <span className='logo-letter'><b>o</b></span>
            <span className='logo-letter'><b>j</b></span>
            <span className='logo-letter'><b>e</b></span>
            <span className='logo-letter'><b>c</b></span>
            <span className='logo-letter'><b>t</b></span>
            <span className='logo-letter'><b>s</b></span>
          </div>
          <div className='sub-text'>&lt;/h2&gt;</div>
          <div className='sub-text'>&lt;Cards</div>
        </div>
        <Cards />
        <div className='sub-text'>/&gt;</div>

        <div className='sub-container'>
        <div className='sub-text'>&lt;h2&gt;</div>
          <div className='fn-wrap' data-aos='slide-right'>
            <span className='logo-main'><b>S</b></span>
            <span className='logo-letter'><b>k</b></span>
            <span className='logo-letter'><b>i</b></span>
            <span className='logo-letter'><b>l</b></span>
            <span className='logo-letter'><b>l</b></span>
            <span className='logo-letter'><b>s</b></span>
            <span className='logo-letter'><b>e</b></span>
            <span className='logo-letter'><b>t</b></span>
          </div>
          <div className='sub-text'>&lt;/h2&gt;</div>

          <div className='box-wrapper'>
              <div className='box-content' data-aos='slide-right' data-aos-delay='50'>
                <img src='./images/css.png'/>
                <h2> CSS </h2>
                <div> Pixel perfect CSS recreational and design skills to make any desired design. </div>
                <p></p>
              </div>


              <div className='box-content-html'>
                <img src='./images/html.png' />
                <h2> HTML5 </h2>
                <div> This one goes without saying, the very backbone of what I do. </div>
              </div>


              <div className='box-content' data-aos='slide-left' data-aos-delay='50'>
                <img src='./images/logo512.png' />
                <h2> React </h2>
                <div> I have some experience developing using the react library and am perfectly capable of making functional web apps using this tool. </div>
              </div>
          </div>

        </div>

      </div>






    </React.Fragment>
  )
}


export default Content
