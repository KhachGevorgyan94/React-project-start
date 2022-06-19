import React from "react";
import "./style.css"
import Boxes from "../boxes";
import menuicon1 from '..//Components/assets/images/menuicon1.png';
import menuicon2 from '..//Components/assets/images/menuicon2.png';
import menuicon3 from '..//Components/assets/images/menuicon3.jpg';

class BoxesMain extends React.Component {
    state = {
      list: [
        {
          image: menuicon1,
          main: 'Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante.',
          button: 'Read More',
          className: 'button-red',
      },
      {
          image: menuicon2,
          main: 'Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit. Nam sed suscipit odio. Morbi in dolor finibus, consequat nisl eget.',
          button: 'Read More',
          className: 'button-green',
      },
      {
          image: menuicon3,
          main: 'Morbi in dolor finibus, consequat nisl eget, pretium nunc. Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit.',
          button: 'Read More',
          className: 'button-blue',
      }

      ]
    }

    render() {
      return <section>
          <div className="cont">
              <div className="menu-box-part">
                  {this.state.list.map((item, index) => {
                      return <Boxes data={item} key={index} />
                  })}
              </div>
          </div>
      </section>
  }

}




export default BoxesMain