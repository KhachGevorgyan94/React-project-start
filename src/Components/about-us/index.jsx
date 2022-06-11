import React from "react";
import './style.css'
import CoverInformation from '../cover-information';
import StuffMain from "./components/stuff-box-main";

class AboutUs extends React.Component {

  render() {
    return <>
      <CoverInformation title='About Simple House' description='This is about page of simple house template. You can modify and use this HTML template for your website. Total 3 HTML pages included in this template. Header image has a parallax effect.' />
      <StuffMain />
    </>

  }
}

export default AboutUs