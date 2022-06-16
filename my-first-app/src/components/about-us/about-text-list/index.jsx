import React from 'react';
import AboutText from '../about-text';
import menuicon1 from '../about-images/menuicon1.png';
import menuicon2 from '../about-images/menuicon2.png';
import menuicon3 from '../about-images/menuicon3.jpg';



class AboutTextList extends React.Component{
    AboutTextData=[
    
    {
        image:menuicon1,
        description:'Donec sed orci fermentum, convallis lacus id, tempus elit.Sed eu neque accumsan, porttitor arcu a, interdum Donec in risus eu ante.',
        button: 'Read More',
        className:'button-red'
    },
    {
        image:menuicon2,
       description:'Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit. Nam sed suscipit odio. Morbi in dolor finibus, consequat nisl eget.',
        button: 'Read More',
        className:'button-green'
    },
    {
        image:menuicon3,
        description:'Morbi in dolor finibus, consequat nisl eget, pretium nunc. Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit.',
        button: 'Read More',
        className:'button-blue'
    }
  

    ]




    render() {
            return <section>
                <div className = 'container'>
                        <div className="about-text-info">
                        {this.AboutTextData.map((item,index)=>{
                        return <AboutText data={item} key={index}/>
                            })}
                        </div>
                </div>
            </section>
            }
}


export default AboutTextList