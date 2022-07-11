import React, {useState} from "react";
import {NavLink} from "react-router-dom";


const Header = ()=>{

    const [menu] = useState([
        {
            title:"Web Design",
            path: "/"
        },
        {
            title: "Online Margeting",
            path: "/online-marqeting"
        },
        {
            title:"E-Commerce",
            path:"/e-commerce"
        },
        {
            title: "Logo & Branding",
            path:"/logo-branding"
        }])



    return <div className="container">
        <ul>
            {menu.map((elem,index)=>{
                return <li key={index}>
                    <NavLink
                        to={elem.path}
                        activeClassName="title"
                        exact={true}>
                        {elem.title}
                    </NavLink>
                </li>
            })}
        </ul>
    </div>
}



export default Header