import React from "react";
import './style.css'
import img1 from "..//assets/images/tviter.png"
import img2 from "..//assets/images/insta.png"
import img3 from "..//assets/images/vk.png"




class ContactUs extends React.Component {


  render() {
    return <div className='cont-for-info'>
         <div className="box-for-topic">
          <h2>Contact Page</h2>
          <h4>You may use <a href=""> Simple Contact Form</a> to send email to your inbox. 
            You can modify <br /> and use this template for your website. Header image 
            has a parallax effect. <br /> Total 3 HTML pages included in this template.</h4>
            
         </div>
         <div className="cont-for-information">
          <div className="box-for-inputs">
            <label>
              <input className="input-box" type="text" name="name" placeholder="Name" />
              <input className="input-box" type="text"  name="email" placeholder="Email"/>
              <input id="massage" type="text"  name="massage" placeholder="Massage"/>
            </label>
            <button>Send</button>
          </div>
          <div className="box-about-us">
            <h2>Our Address</h2>
            <p>180 Orci varius natoque penatibus <br /> et magnis 
              dis parturient montes, <br /> nascetur ridiculus mus 10550</p>
              <p>080-090-0110</p>
              <p>info@company.co</p>
              <div className="for-images">
              <img src={img1} alt="#" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              </div>
          </div>
         </div>
         <iframe className='cont-for-iframe' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d918.07650149806!2d-43.38914!3d-23.012534000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa62b20f8f46e46bd!2sQuiosque%20Sol%20Da%20Barra!5e0!3m2!1sen!2sth!4v1655650210755!5m2!1sen!2sth"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>
    
         
  }
}

export default ContactUs;

