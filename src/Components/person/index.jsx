import React from "react";
import "./style.css"

class Person extends React.Component {
    render() {
        return <div className="person">
            <div className="person-image"></div>
            <div className="person-information">
                <h2>{this.props.data.name}</h2>
                <h3>{this.props.data.work}</h3>
                <p>{this.props.data.about}</p>
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