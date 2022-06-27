import React, {useEffect, useState} from "react";
import useInput from "../../hook/useInput";
import useSettings from "../../hook/useSettings";

const Box = (props) => {
  // useState()

  const {setToken} = useSettings()
  const [value, onCHangeValue] = useInput()
  useEffect(()=>{


    // fetch('https://jsonplaceholder.typicode.com/todos')
    //   .then(response => response.json())
    //   .then(json => console.log(json))


    return ()=>{
      console.log('222222222222222')
    }

  },[])


  const setTokenData = ()=>{
    setToken('asdsahdfgasdhjflkasjdgfkajsdhglfadsfhajksdf')
    props.get('asdsahdfgasdhjflkasjdgfkajsdhglfadsfhajksdf')
  }


  return <div>
    <h1>{props.title}</h1>
    <p>{props.description}</p>

    <button onClick={setTokenData}>click me</button>
  </div>
}

export default Box