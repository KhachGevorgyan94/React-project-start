import React from "react";
class AboutBox extends React.Component{
    render() {
        return <div className="about-list">
            <div className='cover-image-about' style={{backgroundImage: `url('${this.props.data.image}')`}} />
            <div className = 'name-about'>
                <h2>{this.props.data.firstname}</h2>
                <h4>{this.props.data.position}</h4>
                <p>{this.props.data.description}</p>
            </div>
            {this.props.data.text? <h3>{this.props.data.text}</h3> : null}
        </div>
    }
}

export default AboutBox