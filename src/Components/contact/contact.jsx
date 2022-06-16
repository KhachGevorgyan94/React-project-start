import React from "react";
import './contact.css'
import {NavLink} from "react-router-dom";

class Contact extends React.Component {
  ContactData = [
    {
      Image: "",
      d: "080-090-0110"
    },
    {
      Image: "",
      d: "info@company.co"
    }
  ]

  render() {

    return <div className='P-about-us'>
      {console.log("ddd")}

      <h3 className="G-contact">Contact Page</h3>
      <p>You may use Simple Contact Form to send email to your inbox. You can modify and use this template for your website. Header image has a parallax effect. Total 3 HTML pages included in this template.</p>
      <div className="G-contact">
        <div className="G-input">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="email" />
          <input /> <br />
          <button></button>
        </div>
        <div className="P-contact">
          <h4>Our Address</h4>
          <p>180 Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus 10550</p>
        </div>
      </div>
      <ul>
        {this.ContactData.map((item,kay )=>{
          return   <NavLink to={item.Image}
          activeClassName='P-header-active'
          exact={true}>{item.title}</NavLink>
        })}
      </ul>
     

    </div>

  }
}




export default Contact
