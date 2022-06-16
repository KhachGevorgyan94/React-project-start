import React from 'react';
import aboutImage1 from '../about-images/about-01.jpg';
import aboutImage2 from '../about-images/about-02.jpg';
import aboutImage3 from '../about-images/about-03.jpg';
import aboutImage4 from '../about-images/about-04.jpg';
import AboutBox from "../about-box";

class AboutList extends React.Component{
     
   
        AboutData=[
        
        {
            image: aboutImage1,
            firstname: 'Jennifer Soft',
            position:'Founder and CEO',
            description:'Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.',
            facebook:'',
            instagram:'',
        },
        {
            image: aboutImage2,
            firstname: 'Daisy Walker',
            position:'Executive Chef',
            description:'Praesent non vulputate elit. Orci varius natoque et magnis dis parturient, nascetur ridiculus mus.',
            facebook:'',
            instagram:'',
            youtube:''
        },
        {
            image: aboutImage3,
            firstname: 'Florence Nelson',
            position:'Kitchen Manager',
            description:'Aenean sapien sem, ultricies sed vulputate et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae.',
            instagram:'',
            youtube:''
        },
        {
            image: aboutImage4,
            firstname: 'Valentina Martin',
            position:'Culinary Director',
            description:'Praesent non vulputate elit. Orci varius natoque penatibus et magnis montes, nascetur ridiculus mus.',
            facebook:'',
            youtube:''
        }

        ]
    

    

    render() {
        return <div className="about-list-info">
            {this.AboutData.map((item,index)=>{
                return <AboutBox data={item} key={index} />
            })}
        </div>
    }
}
export default AboutList