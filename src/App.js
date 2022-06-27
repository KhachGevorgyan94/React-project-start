import React, {useEffect} from "react";
import {useState} from "react";
import './App.css';
import Box from "./components/box";
import useSettings from "./hook/useSettings";



import {useHistory, useParams, useLocation, } from "react-router-dom";



const App = () => {

  // const history = useHistory()
  const params = useParams()
  const location = useLocation()

  useEffect(()=>{

  }, [])
  const [inputValue, setInputValue] = useState('')

  const {token, setToken} = useSettings()

  const [toggle, setToggle] = useState(false)
  const [formData, setFormData] = useState({
    fistName: '',
    lastName: ''
  })

  const x = [2, 4, 5, 6, 8, 4, 2, 3, 5, 0, 9, 67, 4, 5633, 234, 435, 567, 234, 1223, 345, 567, 678, 56745, 6345, 345, 34213, 1, 32354, 536, 456, 877698, 9, 8, 7, 6, 5, 345,]

  const users = [
    {
      firstName: 'test 1',
      lastName: 'Testyan 1',
      price: 300000,
      position: 'developer',
      gender: 'male'
    },
    {
      firstName: 'test 2',
      lastName: 'Testyan 2',
      price: 350000,
      position: 'designer',
      gender: 'male'

    },
    {
      firstName: 'test 3',
      lastName: 'Testyan 3',
      price: 400000,
      position: 'developer',
      gender: 'male'

    },
    {
      firstName: 'test 4',
      lastName: 'Testyan 4',
      price: 200000,
      position: 'manager',
      gender: 'male'

    },
    {
      firstName: 'test 5',
      lastName: 'Testyan 5',
      price: 150000,
      position: 'manager',
      gender: 'female'

    },
    {
      firstName: 'test 6',
      lastName: 'Testyan 6',
      price: 450000,
      position: 'developer',
      gender: 'female'

    },
    {
      firstName: 'test 7',
      lastName: 'Testyan 7',
      price: 100000,
      position: 'bloger',
      gender: 'female'

    },
    {
      firstName: 'test 9',
      lastName: 'Testyan 9',
      price: 300000,
      position: 'developer',
      gender: 'female'

    },
    {
      firstName: 'test 10',
      lastName: 'Testyan 10',
      price: 600000,
      position: 'designer',
      gender: 'female'

    },
    {
      firstName: 'test 11',
      lastName: 'Testyan 11',
      price: 550000,
      position: 'manager',
      gender: 'male'

    },
    {
      firstName: 'test 12',
      lastName: 'Testyan 12',
      price: 125000,
      position: 'bloger',
      gender: 'female'

    }
  ]

  const [arr, setArr] = useState([])




  const changeInput = (e) => {
    // setInputValue(e.target.value)
    // vall = e.target.value

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = () => {
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

const  getToken = (token)=>{
  console.log(token)
  setToken(token)
  console.log(location)
  console.log(params)
}


  return <div>
    {/*hello word*/}
    {/*<input type="text" name={'fistName'} value={formData.fistName} onChange={changeInput}/>*/}
    {/*<input type="text" name={'lastName'} value={formData.lastName} onChange={changeInput}/>*/}
    {/*/!*<input type="text" value={value} onChange={onChangeInput}/>*!/*/}


    {/*<button onClick={() => console.log(formData)}>click</button>*/}
    {/*<p>{inputValue}</p>*/}

    {/*/!*<Box title={'title 1'} description={'description 1'} />*!/*/}
    {/*/!*<Box title={'title 2'} description={'description 2'} />*!/*/}
    {/*/!*<Box title={'title 3'} description={'description 3'} />*!/*/}

    <button onClick={()=>setToken('aklsdhflkasdfjkjasdjgflewkrjlkfgjhlskdfg;sdjkfhg')}> click me</button>
    <button onClick={() => setToggle(!toggle)}>Click me</button>
    <h1>Token - {token}</h1>
    {toggle ? <Box get={getToken} title={'title 4'} description={' description 4'}/> : null}

  </div>
}

export default App
