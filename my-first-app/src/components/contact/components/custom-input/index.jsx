import React from "react";


class CustomInput extends React.Component {


  handleChange = (e)=>{
    this.props.handleChaangeProps(e.target)
  }

  render() {

    return <label htmlFor="fname">
      <input type={this.props.type}
             placeholder={this.props.placeholder}
             onChange={this.handleChange}
             name={this.props.name}
      />
    </label>
  }
}

export default CustomInput