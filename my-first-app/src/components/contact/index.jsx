import React from "react";
import Address from "./components/addres";
import MapLocation from "./components/map";




class Contact extends React.Component {
    render() {
        return <>
        <div className="container">
              <div className="welcome">
                    <h2>Contact Page</h2>
                    <p>
                    You may use Simple Contact Form to send email to your inbox. 
                    You can modify and use this template for your website. 
                    Header image has a parallax effect. Total 3 HTML pages included in this template.
                    </p>
                </div>
                <Address/>
                <MapLocation/>

            <div className="welcome">
                    <h2>FAQs</h2>
                    <p>
                      This section comes with Accordion tabs for different questions and answers about 
                      Simple House HTML CSS template. Thank you. #666
                    </p>
                </div>




         </div>       
            
           
        </>
    }
}
export default Contact