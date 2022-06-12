import React from "react";
import MenuBox from "../menu-boxes";
import menuicon1 from '../../../assets/images/menuicon1.png';
import menuicon2 from '../../../assets/images/menuicon2.png';
import menuicon3 from '../../../assets/images/menuicon3.jpg';



class MenuBoxMain extends React.Component {

    state = {
        list: [
            {
                image: menuicon1,
                main: 'Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante.',
                button: 'Read More',
            },
            {
                image: menuicon2,
                main: 'Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit. Nam sed suscipit odio. Morbi in dolor finibus, consequat nisl eget.',
                button: 'Read More',
            },
            {
                image: menuicon3,
                main: 'Morbi in dolor finibus, consequat nisl eget, pretium nunc. Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit.',
                button: 'Read More',
            }
        ]
    }
    render() {
        return <section>
            <div className="container">
                <div className="menu-box-part">
                    {this.state.list.map((item, index) => {
                        return <MenuBox data={item} key={index} />
                    })}
                </div>
            </div>
        </section>
    }
}

export default MenuBoxMain