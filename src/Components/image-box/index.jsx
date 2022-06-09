import React from "react";

class ImageBox extends React.Component{

    render() {
        return <div className="list">
            <div className='cover-image' style={{backgroundImage: `url('${this.props.data.image}')`}} />
            <h2>{this.props.data.subject}</h2>
            <p>{this.props.data.title}</p>
            <span>{this.props.data.price}</span>
            {this.props.data.text? <h3>{this.props.data.text}</h3> : null}
        </div>
    }
}

export default ImageBox