import React from "react";
import {useState} from "react";
import Box from "../Zangvaci-box";


const Numbers = ()=>{
    const [Number, setNumber] = useState([
        2,4,5,6,8,4,2,3,5,0,9,67,4,5633,234,435,567,234,
        1223,345,567,678,56745,6345,345,34213,1,32354,536,
        456,877698,9,8,7,6,5,345
    ])

    const [flag, setFlag] = useState(false)
    // const [zangvac, setZangvac] = useState()
    // const [min, setMin] = useState()
    // const [max, setMax] = useState('')



    const clickEven = ()=>{
        // Number.map()
        // setMin(Math.min()
        // setMax(Math.max(Number))

        setFlag(true)

    }




    return <div>
        {flag === true?
            Number.map((element, index) => {
                    if (element % 2 === 0) {
                        return <Box key={index} title={element}/>
                    }
                }
            )
        : null}
        <button onClick={clickEven}>Click me</button>
    </div>

}

export default Numbers