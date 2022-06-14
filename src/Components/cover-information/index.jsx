import React from "react";
import './style.css';

class CoverInformation extends React.Component {
    render() {

        return <section>
            <div className="container">
                <div className="cover-information">
                    <h2>{this.props.title}</h2>
                    <p>
                        {this.props.description}
                    </p>
                </div>
            </div>
        </section>
    }
}
export default CoverInformation