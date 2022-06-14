import React from "react";
import './index.css';
import HistoryImage from '../../../assets/images/about-06.jpg';

class HistoryRestaurant extends React.Component {
    render() {
        return <section className="history">
            <div className="container">
                <div className="history-main">
                    <div className="G-image history-image" style={{ backgroundImage: `url('${HistoryImage}')` }}></div>
                    <div className="history-text">
                        <h2>History of our restaurant</h2>
                        <p>Sed ligula risus, interdum aliquet imperdiet sit amet, auctor sit amet justo. Maecenas posuere lorem id augue interdum vehicula. Praesent sed leo eget libero ultricies congue.</p>
                        <p>Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You will need to <a href="#">contact TemplateMo</a> for additional permissions about our templates. Thank you.</p>
                    </div>
                </div>
            </div>
        </section>
    }
}
export default HistoryRestaurant