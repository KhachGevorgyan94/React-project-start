import React from "react";
import SectionMain from "../section-main-part";
import avocadoImage from "../assets/images/avocado.jpg";
import CoverInformation from "../cover-information";

class Section extends React.Component {

    render() {
        return <section>
            <div className="container">
                <CoverInformation title='Welcome to Simple House' description='Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites.' />
                <SectionMain />
                <div className="section-avocado">
                    <div className="avocado" style={{ backgroundImage: `url('${avocadoImage}')` }} />
                    <div className="avocado-title">
                        <h3>Maecenas nulla neque</h3>
                        <p>Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut
                            id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Maecenas interdum porttitor imperdiet. Integer facilisis.
                        </p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        </section>
    }
}


export default Section