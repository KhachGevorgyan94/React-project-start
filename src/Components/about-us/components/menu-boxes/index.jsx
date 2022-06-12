import React from "react";
import './style.css';

class MenuBox extends React.Component {
    render() {

        return <div className="G-padding-33">
            <div className="menu-box-style">
                <span className="G-image">{this.props.data.image}</span>
                <p>{this.props.data.main}</p>
                <div className="menu-box-button">
                    <button>{this.props.data.button}</button>
                </div>
            </div>
        </div>
    }
}
export default MenuBox