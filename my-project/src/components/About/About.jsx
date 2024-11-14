// components/About/About.jsx
import React from 'react';
import Popular from '../Popular';
import './about.css';
import lottie from 'lottie-web';
import { defineElement } from '@lordicon/element';

// Define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const About = () => {
  return (
    <div className="about-container">
      <div className="main-about">
        <div className="heading-about">
          <h1>
          Crafting Responsive Experiences HTML, CSS, and JavaScript</h1>
          <div className="text-about">
          Hi, I'm Preetabh - Awasthi, a dedicated BCA student (2024) with a passion for coding and technology. Specializing in web development and Python programming, I strive to create innovative solutions and continuously enhance my skills—let's connect and explore the world of tech together!
          </div>
        </div>

        <div className="img-about">
          {/* You can add an image here later if needed */}
        </div>
      </div>


      {/* box section */}



      <div className="boxes-main">
        <div className="boxes-text">he;llo txus</div>
        <div className="boxes">
          
        {            /* box-1 */                }
          <a href="">
            <div className="box-1">
            <lord-icon
    src="https://cdn.lordicon.com/qnpnzlkk.json"
    trigger="loop"
    delay="2000"
    colors="primary:#ffffff"
    >
</lord-icon>

<div className="boxes-inner-text">
  <div className="h2">Top-coders</div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing.</p></div>

            </div>
          </a>


            {            /* box-2 */                }


        <a href=""><div className="box-2">
        <lord-icon
    src="https://cdn.lordicon.com/ktsahwvc.json"
    trigger="loop"
    delay="2000"
    colors="primary:#ffffff"
    >
</lord-icon>

<div className="boxes-inner-text">
  <div className="h2">Top-coders</div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing.</p></div>

        </div>
        </a>


           {            /* box-3 */                   }


        <a href="">
          <div className="box-3">
          <lord-icon
    src="https://cdn.lordicon.com/jyjslctx.json"
    trigger="loop"
    delay="2000"
    colors="primary:#ffffff"
    >
</lord-icon>

<div className="boxes-inner-text">
  <div className="h2">Top-coders</div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
</div>
          </div>
        </a>

        
        </div>
      </div>


      {/* Our Services Section */}
      
      <div className="services">
        <div className="our-services">
          <h2>OUR SERVICES</h2>
        </div>
        <div className="web-container">

        
        <div className="web-dev">
          <a href="#">
            <div className="headings">
            <lord-icon
    src="https://cdn.lordicon.com/qhkvfxpn.json"
    trigger="loop"
    delay="2000"
    colors="primary:#fff"
    >
</lord-icon>
              <div className="h3">
                Html
              </div>
            <h3></h3>
              <p>Hyper text markup language crete the layout of websites</p>
            </div>
          </a>
        </div>
        <div className="web-dev">
          <a href="#">
            <div className="headings">
              <lord-icon
    src="https://cdn.lordicon.com/zhnsuudj.json"
    trigger="loop"
    delay="2000"
    colors="primary:#fff"
    >
</lord-icon>
             <div className="h3">
                Java-Script
              </div>
              <p>J.S is the main brain of website visit for more information....</p>
            </div>
          </a>
        </div>
        <div className="web-dev">
          <a href="#">
            <div className="headings">
              <lord-icon
                src="https://cdn.lordicon.com/eodeknny.json"
                trigger="loop"
                delay="2000"

                colors="primary:#d1faf0"
                
              ></lord-icon>
              <div className="h3">
                Web Developments
              </div>
              <p>Web development builds engaging, user-friendly websites that connect businesses with audiences </p>
            </div>
          </a>
        </div>
        <div className="web-dev">
          <a href="#">
            <div className="headings">
            <lord-icon
    src="https://cdn.lordicon.com/xfyxpoer.json"
    trigger="loop"
    delay="2000"
    colors="primary:#ffff"
    >
</lord-icon>
              <div className="h3">
                Python
              </div>
              <p>
              Python is a versatile, easy-to-read programming language ideal for all skill levels.</p>
            </div>
          </a>
        </div>
        <div className="web-dev">
          <a href="#">
            <div className="headings">
              <lord-icon
                src="https://cdn.lordicon.com/eodeknny.json"
                trigger="loop"
                delay="2000"
                colors="primary:#d1faf0"
                
              ></lord-icon>
              <div className="h3">
                C++
              </div>
              <p>
              C++ is a high-performance language that supports object-oriented programming.</p>
            </div>
          </a>
        </div>
        <div className="web-dev">
          <a href="#">
            <div className="headings">
            <lord-icon
    src="https://cdn.lordicon.com/rwtswsap.json"
    trigger="loop"
    delay="2000"
    colors="primary:#fff">
    
</lord-icon>
              <div className="h3">
               Java
              </div>
              <p>
              Java is a versatile, object-oriented programming language designed for portability.</p>
            </div>
          </a>
        </div>
        </div>

      </div>

      <Popular />
    </div>
  );
};

export default About;
