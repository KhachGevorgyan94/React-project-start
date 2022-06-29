import React from "react";


const Box = (props)=>{


    return <div>
        <span className={props.title%2 === 0 ? 'red': null}>{props.title}</span>
    </div>
}

export default Box