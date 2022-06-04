import React from "react";

class SectionPart extends React.Component {

  constructor() {
    super();

    // this.state = {
    //   changeColor:false
    // }
  }
  changeColor = false
  componentDidMount() {
    console.log(this.props.data)
  }

  generateNewPrice = (price) => {
    console.log(price)
    if (price > 20000) {
      return price * 25 / 100
    }
    return price
  }

  toggleClick = ()=>{
    // this.setState({changeColor: !this.changeColor})
    this.changeColor = !this.changeColor

    console.log(this.changeColor)
  }


  render() {
    return <div className={`section-part ${this.changeColor?'P-red':''} `}>
      <h3>{this.props.data.title}</h3>
      <p>{this.props.data.description}</p>
      <h1> {this.generateNewPrice(this.props.data.totalPrice)}</h1>

      <button onClick={this.toggleClick}> click me</button>
    </div>
  }
}

export default SectionPart
