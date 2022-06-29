import React from "react";
import Man from "../assets/images/Man.jpg"
import WoMan from "../assets/images/woman.jpg"

const UserBox = (props)=>{

    return <div>
       <div className='box'>
           <img  src={props.gender === 'male'? Man: WoMan} alt="nkar"/>
           <p>{props.firstName} {"" + props.lastName}</p>
           <p>{props.position}</p>
           <p>{props.price}</p>
    </div>
    </div>


}


export default UserBox

