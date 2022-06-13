import React from "react";
import Person from "../person";
import './style.css'
import person1 from "../assets/images/image-1.jpg";

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
    </div>
  }
}

export default AboutUs

