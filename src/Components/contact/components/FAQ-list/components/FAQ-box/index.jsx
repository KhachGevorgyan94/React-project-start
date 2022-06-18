import React from "react";
import './style.css'


class FAQBox extends React.Component {
  state = {
    isActive: false,
  }

  faqClick = () => {
    this.setState({isActive:!this.state.isActive})
  }

  render() {
    return <div className={`P-faq-box ${this.state.isActive? 'P-open-faq':''}`}>
      <div className='P-faq-header' onClick={this.faqClick}>
        <h3>{this.props.title}</h3>
      </div>
      <div className='P-faq-body'>
        {this.props.children}
      </div>
    </div>
  }
}

export default FAQBox