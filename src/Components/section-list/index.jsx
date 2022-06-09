import React from "react";

import ImageBox from "../image-box";

class Sectionlist extends React.Component{

    render() {
        return <div className="section-list-info">
            {this.props.productList.map((item, index)=>{
                return <ImageBox data={item} key={index} />
            })}
        </div>
    }
}
export default Sectionlist