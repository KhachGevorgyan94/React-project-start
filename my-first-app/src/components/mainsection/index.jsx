import  React  from "react";
import SectionPart from "../section-part";
import image2 from "../../assets/images/img2.jpg";
import image3 from "../../assets/images/img3.jpg";
import image4 from "../../assets/images/img4.jpg";
import image5 from "../../assets/images/img5.jpg";
import image6 from "../../assets/images/img6.jpg";
import image7 from "../../assets/images/img7.jpg";
import image8 from "../../assets/images/img8.jpg";
import image9 from "../../assets/images/img9.jpg";


class MainSection extends React.Component{
    sectionsData = [
        {
            image:image2,
            title:'Fusce dictum finibus',
            description:'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            totalPrice:' $45/$55'
          },
          {
            image:image3,
            title:'Aliquam sagittis',
            description:'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            totalPrice:  '$65/$70'
          },
          {
            image:image4,
            title:'Sed varius turpis',
            description:'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            totalPrice:   '$30.50'
          },
          {
            image:image5,
            title:'Aliquam sagittis',
            description:'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            totalPrice:   '$25.50'
          },
          {
            image:image6,
            title:'Fusce dictum finibus',
            description:'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            totalPrice:' $45/$55'
          },
          {
            image:image7,
            title:'Aliquam sagittis',
            description:'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            totalPrice:  '$65/$70'
          },
          {
            image:image8,
            title:'Sed varius turpis',
            description:'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            totalPrice:   '$30.50'
          },
          {
            image:image9,
            title:'Aliquam sagittis',
            description:'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            totalPrice:   '$25.50'
          }
    ]
render() {
    return <div>
      <div className="container">
        <div className="section-main">
          {this.sectionsData.map((item,index)=>{
              return <SectionPart key={index} data={item}/>
          })}
        </div>
       </div>
    </div>
    }   
}
        
export default MainSection