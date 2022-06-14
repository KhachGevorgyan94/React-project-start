import React from "react";
import './style.css';
import callicon from '../../../assets/images/call.png';
import mailicon from '../../../assets/images/email.png';
import CustomInput from "../../../about-us/components/custom-input";


class Address extends React.Component {

  state = {
    formData: {
      name: '',
      email: ''
    }
  }


  setFormData = (e)=>{
    const {formData} = this.state
    formData[e.name] = e.value
    this.setState({formData})

  }

  submit =()=>{
    console.log(this.state.formData)
  }
  render() {
    return <section>
      <div className="container">
        <div className="fill-address">
          <div className="email">
            <form action="">
              <CustomInput handleChaangeProps={this.setFormData}
                           name='name'
                           placeholder='Name'
                           type='text'/>

              <CustomInput handleChaangeProps={this.setFormData} name='email' placeholder='Email' type='email'/>
              <label htmlFor="text">Message </label>
              <textarea name="area" id="input-area"></textarea>
            </form>
            <div className="mail-button">
              <button onClick={this.submit}>Send</button>
            </div>
          </div>
          <div className="address">
            <h2>Our Address</h2>
            <p>180 Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus 10550</p>
            <div className="address-flex">
              <span className="G-image call-icon" style={{background: `url('${callicon}')`}}></span>
              <p>080-090-0110</p>
            </div>
            <div className="address-flex">
              <span className="G-image mail-icon" style={{background: `url('${mailicon}')`}}></span>
              <p>info@company.co</p>
            </div>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  }
}

export default Address