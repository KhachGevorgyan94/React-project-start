import React from "react";
import Person from "../person";
import './style.css'
import person1 from "../assets/images/image-1.jpg";
import backparalax from "../assets/images/paralax.jpg";
import information from "../information";

class AboutUs extends React.Component {
  state = {
    list: [
      {
        name: "Daisy Walker",
        work: "Executive Chef",
        about: "Praesent non vulputate elit. Orci varius natoque et magnis dis parturient, nascetur ridiculus mus.",
        image: "https://templatemo.com/templates/templatemo_539_simple_house/img/about-02.jpg",
      },

      {
        name: "Daisy Walker 1",
        work: "Executive Chef",
        about: "Praesent non vulputate elit. Orci varius natoque et magnis dis parturient, nascetur ridiculus mus.",
        image: "https://templatemo.com/templates/templatemo_539_simple_house/img/about-02.jpg",
      },
      {
        name: "Daisy Walker 1",
        work: "Executive Chef",
        about: "Praesent non vulputate elit. Orci varius natoque et magnis dis parturient, nascetur ridiculus mus.",
        image: "https://templatemo.com/templates/templatemo_539_simple_house/img/about-02.jpg",
      },
      {
        name: "Daisy Walker 1",
        work: "Executive Chef",
        about: "Praesent non vulputate elit. Orci varius natoque et magnis dis parturient, nascetur ridiculus mus.",
        image: "https://templatemo.com/templates/templatemo_539_simple_house/img/about-02.jpg",
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
         <div className="bac-img"></div>
      </div>
      <div className="information-cont">
        <div className="information-boxes">
          <div className="box-blue">
            <div className="box-image"></div>
              <h3>Donec sed orci fermentum, convallis lacus id, 
              tempus elit. Sed eu neque accumsan, porttitor arcu a, 
              interdum est. Donec in risus eu ante.</h3>
              <button>Read More</button>
              
          </div>
        </div>
      </div>
    </div>
  }
}

export default AboutUs

