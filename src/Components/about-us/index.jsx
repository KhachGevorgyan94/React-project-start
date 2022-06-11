import React from "react";
import Person from "../person";
import './style.css'
import person1 from "../assets/images/image-1.jpg";

class AboutUs extends React.Component {

  render() {
    return  <div className='P-about-us'>
      <h1 className="header-h1"> About Simple House</h1>
      <p className="header-p"> This is about page of simple house template.  You can modify and use this <br /> HTML template for your website. Total 3 HTML pages included in 
        this template. <br /> Header image has a parallax effect.</p>
        <div className="person-list">
        <Person/>
        </div>
    </div>
  }
}

export default AboutUs