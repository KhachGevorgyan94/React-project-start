import React from "react";
import './style.css';
import aboutImage from '../about-us/about-images/about-06.jpg';
import AboutList from "./about-list";
import clockImage from './about-images/clock-image.jpg'
import AboutTextList from "./about-text-list";


class AboutUs extends React.Component {

  render() {
    return <div className='P-about-us'>
              <div className="container">
                <div className="welcome">
                    <h2>About Simple House</h2>
                    <p>
                      This is about page of simple house template. You can modify and use this HTML template 
                      for your website. Total 3 HTML pages included in this template.
                       Header image has a parallax effect.
                    </p>
                </div>
                <AboutList/>
                <div className = 'clock-image' style = {{backgroundImage: `url('${clockImage}')`}}/>
                <AboutTextList/>
                <div className="about-restaurant">
                    <div className="about-image" style={{backgroundImage: `url('${aboutImage}')`}}/>
                    <div className="about-title">
                        <h3>History of our restaurant</h3>
                        <p>
                          Sed ligula risus, interdum aliquet imperdiet sit amet, auctor sit amet justo. 
                            Maecenas posuere lorem id augue interdum vehicula. Praesent sed leo eget libero ultricies congue.
                            Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus.
                             Ut id bibendum erat. Lorem ipsum dolor sit amer,
                            consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis.
                        </p>
                        
                    </div>
                </div>


              </div>
             

            </div>
  }
}

export default AboutUs