import React from "react";
import "./index.css";

const Header = () => {
  return <header>
    <div className="container">
      <div className="img-on-cont">
        <div className="for-img">
          <nav>
            <div className="img-block">
              <div className="img-house"></div>
              <div className="topic-house">
                <h2>Simple House</h2>
                <h6>new restaurant template</h6>
              </div>
            </div>
            <div className="navbar">
              <div class="menu-bar-cont">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
}

export default Header;