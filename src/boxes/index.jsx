import React from "react";
import "./style.css"



class Boxes extends React.Component {
    render() {
        
        return <div className="global-topic">
            <div className="bg">
            <span className="box-img" style={{ backgroundImage: `url('${this.props.data.image}')`}}></span>
            </div>
            <div className="box-topic">
              <h3>{this.props.data.main}</h3>
            </div>
            <div className="for-button">
            <button className={`${this.props.data.className}`}>{this.props.data.button} </button>
            </div>
        </div>
    } 


}
export default Boxes