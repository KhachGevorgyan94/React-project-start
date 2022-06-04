import React from "react";
import SectionPart from "../section-part";

class MainSection extends React.Component {

  sectionsData = [
    {
      title:'title 1',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti ipsa nihil tempore, tenetur vero.',
      totalPrice: 15000
    },
    {
      title:'title 2',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti ipsa nihil tempore, tenetur vero.',
      totalPrice: 20000
    },
    {
      title:'title 3',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti ipsa nihil tempore, tenetur vero.',
      totalPrice: 25000
    }
  ]

  render() {
    return <section>
      <div className="container">
        <div className="section-main">
          {this.sectionsData.map((item,index)=>{
              return <SectionPart key={index} data={item}/>
          })}
        </div>
        <div className="section-end">
          <p>Secondari column</p>
        </div>
      </div>
    </section>
  }

}


export default MainSection
