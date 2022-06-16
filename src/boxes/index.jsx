import React from "react";
import "./style.css"
// import nkar from '../Components/assets/images/avocado.jpg'



class Boxes extends React.Component {
    render() {
        return <div className="global-topic">
            {/* <span className="box-img" style={{ background: `url('${this.props.data.image}')` }}></span> */}
            <div className="box-topic">
              <h3>{this.props.data.main}</h3>
            </div>
            <button className={`${this.props.data.className}`}>{this.props.data.button} click me</button>
        </div>
    } 


}
export default Boxes