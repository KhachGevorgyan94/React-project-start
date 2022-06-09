import React from "react";



class SectionPart extends React.Component{
    render() {
        return <div className ='sectionPart'>
          <div style = {{backgroundImage:`url(${this.props.data.image})`, height:250, width:250, }}></div>
          <h3>{this.props.data.title}</h3>
          <p>{this.props.data.description}</p>
          <h1>{this.props.data.totalPrice}</h1>
    
          
        </div>
      }
}
export default SectionPart