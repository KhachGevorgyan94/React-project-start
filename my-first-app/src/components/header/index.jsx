import React from "react";

import {NavLink} from "react-router-dom";

class Header extends React.Component {
  headerData = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'About',
      path: '/about-us'
    },
    {
      title: 'Contact',
      path: '/contact'
    }
  ]

  render() {
    return <header>
      <div className="cover">
        <div className="container">
          <div className="header-main">
            <div className="header-logo">
              <div className="logo-img">
                <div className="white"/>
                <div className="without-white"/>
              </div>
              <div className="logo-title">
                <h1>Simple House</h1>
                <p>new restaurant template</p>
              </div>
            </div>
            <div className="header-menu">
              <ul>
                {this.headerData.map((item, index) => {
                  return <li key={index}>
                    <NavLink to={item.path}
                             activeClassName='P-header-active'
                             exact={true}>{item.title}</NavLink>
                  </li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  }
}

export default Header