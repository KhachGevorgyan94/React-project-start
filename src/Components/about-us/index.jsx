import React from "react";
import Person from "../person";
import Boxes from "../../boxes";
import bacimg from '../assets/images/paralax.jpg';
import './style.css'
import BoxesMain from "../../BoxesMain";
import bgrest from "..//assets/images/rest.jpg"



class AboutUs extends React.Component {
  state = {
    list: [
      {
        name: "Jennifer Soft",
        work: "Founder and CEO",
        about: "Praesent non vulputate elit. Orci varius natoque et magnis dis parturient, nascetur ridiculus mus.",
        image: "https://templatemo.com/templates/templatemo_539_simple_house/img/about-01.jpg",
      },

      {
        name: "Daisy Walker",
        work: "Executive Chef",
        about: "Praesent non vulputate elit. Orci varius natoque et magnis dis parturient, nascetur ridiculus mus.",
        image: "https://templatemo.com/templates/templatemo_539_simple_house/img/about-02.jpg",
      },
      {
        name: "Florence Nelson",
        work: "Kitchen Manager",
        about: "Aenean sapien sem, ultricies sed vulputate et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae.",
        image: "https://templatemo.com/templates/templatemo_539_simple_house/img/about-03z.jpg",
      },
      {
        name: "Valentina Martin",
        work: "Culinary Director",
        about: "Praesent non vulputate elit. Orci varius natoque penatibus et magnis montes, nascetur ridiculus mus.",
        image : "https://templatemo.com/templates/templatemo_539_simple_house/img/about-04.jpg",
      },
    ]
  }
  render() {
    return <div className='P-about-us'>
      <div className="header-for-topic">
      <h1 className="header-h1"> About Simple House</h1>
      <p className="header-p"> This is about page of simple house template.  You can modify and use this <br /> HTML template for your website. Total 3 HTML pages included in
        this template. <br /> Header image has a parallax effect.</p>
        </div>
      <div className="person-list">
        
        {this.state.list.map((item, index) => {
          return  <Person data={item}  key={index}/>
        })}
      </div>
      <div className="cont-paralax">
         <div className="bac-img" style={{ backgroundImage: `url('${bacimg}')`}} ></div>
      </div>
      <BoxesMain/>
       <div className="cont-history">
        <div className="footer-img">
          <img src={bgrest} alt="" />
        </div>
        <div className="footer-topic">
          <h3>History of our restaurant</h3>
          <p>Sed ligula risus, interdum aliquet imperdiet sit amet, auctor sit amet justo. Maecenas posuere lorem id augue interdum 
            vehicula. Praesent sed leo eget libero ultricies congue.</p>
            <p>Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You will need to <a href="#"> contact TemplateMo </a>for additional permissions about our templates. Thank you.</p>
        </div>
       </div>
    </div>
  }
}

export default AboutUs

