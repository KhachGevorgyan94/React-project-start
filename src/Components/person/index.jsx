import React from "react";
import "./style.css"

class Person extends React.Component {
    render() {
        return <div className="person">
            <div className="person-image"></div>
            <div className="person-information">
                <h2>Jennifer Soft</h2>
                <h3>Founder and CEO</h3>
                <p>Vivamus cursus leo nec sem feugiat <br />
                    sagittis.  Duis ut feugiat  odio, sit amet <br /> accumsan odio.</p>
                <div className="person-links">
                    <ul>
                         <li><a href="https://fb.com/">facebook</a></li>
                         <li><a href="https://fb.com/">Twiter</a></li> 
                         <li><a href="https://fb.com/">Instagram</a></li>
                    </ul>
                </div>
            </div>
        </div>
    }


}


export default Person