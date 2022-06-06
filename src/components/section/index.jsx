import React from "react";
import SectionPart from "../section-part";
import "./style.css";

class MainSection extends React.Component {

  sectionsData = [
    {
      title: 'title 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti ipsa nihil tempore, tenetur vero.',
      totalPrice: 15000
    },
    {
      title: 'title 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti ipsa nihil tempore, tenetur vero.',
      totalPrice: 20000
    },
    {
      title: 'title 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti ipsa nihil tempore, tenetur vero.',
      totalPrice: 25000
    }
  ]

  render() {
    return <section>
      <div className="cont-main-topic">
        <div className="cont-for-foods">
          <div className="box-header-topic">
            <h2>Welcome to Simple House</h2>
            <p>Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites.</p>
            <button id="main-button">Pizza</button>
            <button>Salad</button>
            <button>Noodle</button>
          </div>
          <div className="boxes-for-foods">
            <div className="box-food">
              <div className="box-for-img-one"></div>
              <div className="box-for-topic">
                <h2>Fusce dictum finibus</h2>
                <h6>Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</h6>
                <p>$45 / $55</p>
              </div>
            </div>
            <div className="box-food">
              <div className="box-for-img-two"></div>
              <div className="box-for-topic">
              <h2>Aliquam sagittis</h2>
                <h6>Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</h6>
                <p>$65 / $70</p>
              </div>
            </div>
            <div className="box-food">
              <div className="box-for-img-three"></div>
              <div className="box-for-topic">
              <h2>Sed varius turpis</h2>
                <h6>Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</h6>
                <p>$30.50</p>
              </div>
            </div>
            <div className="box-food">
              <div className="box-for-img-four"></div>
              <div className="box-for-topic">
              <h2>Aliquam sagittis</h2>
                <h6>Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</h6>
                <p>$25.50</p>
              </div>
            </div>
            <div className="box-food">
              <div className="box-for-img-five"></div>
              <div className="box-for-topic">
              <h2>Maecenas eget justo</h2>
                <h6>Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</h6>
                <p>$80.25</p>
              </div>
            </div>
            <div className="box-food">
              <div className="box-for-img-six"></div>
              <div className="box-for-topic">
              <h2>Quisque et felis eros</h2>
                <h6>Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</h6>
                <p>$20 / $40 / $60</p>
              </div>
            </div>
            <div className="box-food">
              <div className="box-for-img-seven"></div>
              <div className="box-for-topic">
              <h2>Sed ultricies dui</h2>
                <h6>Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</h6>
                <p>$94</p>
              </div>
            </div>
            <div className="box-food">
              <div className="box-for-img-eight"></div>
              <div className="box-for-topic">
              <h2>Donec porta consequat</h2>
                <h6>Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</h6>
                <p>$15</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  }

}


export default MainSection;
