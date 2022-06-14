import React from "react";
import StuffBox from '../stuff-box';
import about1 from '../../../assets/images/about-01.jpg';
import about2 from '../../../assets/images/about-02.jpg';
import about3 from '../../../assets/images/about-03.jpg';
import about4 from '../../../assets/images/about-04.jpg';


class StuffMain extends React.Component {
    state = {
        list: [
            {
                image: about1,
                name: 'Jennifer Soft',
                position: 'Founder and CEO',
                about: 'Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.',
                social: ''
            },
            {
                image: about2,
                name: 'Daisy Walker',
                position: 'Executive Chef',
                about: 'Praesent non vulputate elit. Orci varius natoque et magnis dis parturient, nascetur ridiculus mus.',
                social: ''
            },
            {
                image: about3,
                name: 'Florence Nelson',
                position: 'Kitchen Manager',
                about: 'Aenean sapien sem, ultricies sed vulputate et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae.',
                social: ''
            },
            {
                image: about4,
                name: 'Valentina Martin',
                position: 'Culinary Director',
                about: 'Praesent non vulputate elit. Orci varius natoque penatibus et magnis montes, nascetur ridiculus mus.',
                social: ''
            }

        ]

    }
    render() {
        return <div className="stuff-list-info">
            <div className="container">
                <div className="stuff-list">
                    {this.state.list.map((item, index) => {
                         return <StuffBox   data={item} key={index} />
                    })}
                </div>
            </div>
        </div>
    }
}
export default StuffMain