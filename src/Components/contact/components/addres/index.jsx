import React from "react";
import './style.css';
import callicon from '../../../assets/images/call.png';
import mailicon from '../../../assets/images/email.png';



class Address extends React.Component {
    render() {
        return <section>
            <div className="container">
                <div className="fill-address">
                    <div className="email">
                        <form action="">
                            <label htmlFor="fname">
                                <input type="text" id="name" name="fname" placeholder="Name" />
                            </label>
                            <label htmlFor="email">
                                <input type="email" id="email" name="email" placeholder="Email" />
                            </label>
                            <label htmlFor="text">Message    </label>
                            <textarea name="area" id="input-area" ></textarea>
                        </form>
                        <div className="mail-button">
                            <button>Send</button>
                        </div>
                    </div>
                    <div className="address">
                        <h2>Our Address</h2>
                        <p>180 Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus 10550</p>
                        <div className="address-flex">
                            <span className="G-image call-icon" style={{ background: `url('${callicon}')` }}></span>
                            <p>080-090-0110</p>
                        </div>
                        <div className="address-flex">
                            <span className="G-image mail-icon" style={{ background: `url('${mailicon}')` }}></span>
                            <p>info@company.co</p>
                        </div>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    }
}
export default Address