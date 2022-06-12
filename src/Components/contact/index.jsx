import React from "react";
import CoverInformation from "../cover-information";
import Address from '../contact/components/addres';

class Contact extends React.Component {
    render() {
        return <>
            <CoverInformation title='Contact Page' description='You may use Simple Contact Form to send email to your inbox. You can modify and use this template for your website. Header image has a parallax effect. Total 3 HTML pages included in this template.' />
            <Address />


        </>
    }
}
export default Contact