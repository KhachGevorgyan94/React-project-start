import React from "react";
import CoverInformation from "../cover-information";
import Address from '../contact/components/addres';
import MapLocation from "./components/map";
import ImputBoxes from "./components/input-boxes-4";

class Contact extends React.Component {
    render() {
        return <>
            <CoverInformation title='Contact Page' description='You may use Simple Contact Form to send email to your inbox. You can modify and use this template for your website. Header image has a parallax effect. Total 3 HTML pages included in this template.' />
            <Address />
            <MapLocation />
            <CoverInformation title='FAQs' description='This section comes with Accordion tabs for different questions and answers about Simple House HTML CSS template. Thank you. #666' />
            <ImputBoxes />
        </>
    }
}
export default Contact