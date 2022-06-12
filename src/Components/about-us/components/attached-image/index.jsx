import React from "react";
import './style.css';
import AttachedImage from '../../../assets/images/about-05.jpg';


class FixAttachImage extends React.Component {
    render() {
        return <div className="container">
            <div className="attached-image G-image" style={{ backgroundImage: `url('${AttachedImage}')` }}></div>
        </div>

    }
}
export default FixAttachImage
