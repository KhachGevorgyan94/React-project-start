import React from "react";


const Section1 = (props)=>{




    return <div className="container">
        <div className="mainsection">
            {/*<img src={props.imgValue} alt="nkar"/>*/}
            <div className='cover-image' style={{backgroundImage: `url('${props.imgValue}')`}} />
            <div className="block-title">
                <h2>{props.direction}</h2>
                <p>{props.text}</p>
                <div className="text-block">
                    <div>
                        <h3>{props.direction2}</h3>
                        <p>{props.text2}</p>
                    </div>
                    <div>
                        <h3>{props.direction3}</h3>
                        <p>{props.text3}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}


export default Section1