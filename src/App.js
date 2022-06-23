import React from "react";
import {useState} from "react";
import './App.css';
import Box from "./components/box";


const App = () => {

  const [inputValue, setInputValue] = useState('')
  const [formData, setFormData] = useState({
    fistName: '',
    lastName: ''
  })

  const [arr, setArr] = useState([])

  const changeInput = (e) => {
    // setInputValue(e.target.value)
    // vall = e.target.value

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = ()=>{
    // const obj = {
    //   title:value1,
    //   descriotion:value2
    // }
    arr.push(formData)
    setArr(arr)

    setFormData({
      fistName: '',
      lastName: ''
    })

  }


  return <div>
    hello word
    <input type="text" name={'fistName'} value={formData.fistName} onChange={changeInput}/>
    <input type="text" name={'lastName'} value={formData.lastName} onChange={changeInput}/>
    {/*<input type="text" value={value} onChange={onChangeInput}/>*/}


    <button onClick={()=>console.log(formData)}>click</button>
    <p>{inputValue}</p>
    <h1>{value1}</h1>
    <h1>{value2}</h1>

    {/*<Box title={'title 1'} description={'description 1'} />*/}
    {/*<Box title={'title 2'} description={'description 2'} />*/}
    {/*<Box title={'title 3'} description={'description 3'} />*/}


    <Box title={'title 4'} description={' description 4'}/>


  </div>
}

export default App
