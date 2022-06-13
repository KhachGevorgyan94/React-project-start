import React from "react";
import './stye.css'
import AboutList from "../about-list";
import about1 from "../assets/images/about-01.jpg";
import about2 from "../assets/images/about-02.jpg";
import about3 from "../assets/images/about-03.jpg";
import about4 from "../assets/images/about-04.jpg";

class AboutList extends React.Component {
  style={
    aboutList:[
      {
        image:about1,
        fulName:'Jennifer Soft',
        work:'Founder and CEO',
        information:'Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.',
        facebook:'/x',
        twitter:'/y',
        instagram:'/z'
      },
      {
        image:about2,
        fulName:'Daisy Walker',
        work:'Executive Chef',
        information:'Praesent non vulputate elit. Orci varius natoque et magnis dis parturient, nascetur ridiculus mus.',
        facebook:'/x',
        twitter:'/y'
      },
      {
        image:about3,
        fulName:'Florence Nelson',
        work:'Kitchen Manager',
        information:'Aenean sapien sem, ultricies sed vulputate et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae.',
        facebook:'/x',
        instagram:'/z'
      },
      {
        image:about4,
        fulName:'Valentina Martin',
        work:'Culinary Director',
        information:'Praesent non vulputate elit. Orci varius natoque penatibus et magnis montes, nascetur ridiculus mus.',
        facebook:'/x',
        twitter:'/y',
        instagram:'/z',
        youtube:'/a'
      }




    ],
  }

  render() {
    return <div className='P-about-us'>
      <h1> About us</h1>
    </div>
  }
}

export default AboutList