import React from "react";
import "./style.css";

class StuffBox extends React.Component {

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return <div className="G-padding-50">
            <div className="stuff-box">
                <span className='stuff-img G-image' style={{ backgroundImage: `url('${this.props.data.image}')` }}></span>
                <div className="stuff-box-main">
                    <h2>{this.props.data.name}</h2>
                    <h3>{this.props.data.position}</h3>
                    <p>{this.props.data.about}</p>
                    <div>
                        <ul>
                            <li>
                                <a href=""></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    }
}
export default StuffBox