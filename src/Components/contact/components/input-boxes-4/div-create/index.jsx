import React from "react";
import DivClickMain from "../div-create-main";


class DivClick extends React.Component {
    render() {
        return <section>
            <div className="container">
                <div className="input-boxes-4">
                    {this.props.title}
                </div>
            </div>
        </section>
    }
}
export default DivClick