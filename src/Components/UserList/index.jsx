import React, {useState} from "react";
import UserBox from "../UserBox";


const UserList = ()=>{

    const [value,setValue] = useState(null)
    const [value1,setValue1] = useState(null)
    const [arr,setArr] = useState([])
    const [userList]  = useState(
        [
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
    )



    const InputChange = (e)=>{
        setValue(e.target.value)
    }



    const ButtonClick = ()=>{
        setValue1(value)
        setArr(userList.filter(x => x.position.indexOf(value) !== -1))
    }


    return <div>
        {console.log(arr)}
        <div className="form">
            <input
                type="text"
                onChange={InputChange}/>
            <button onClick={ButtonClick}>Click me</button>
        </div>
        <div  className="main">
        {value1?arr.map((elem,index)=>{
            return <UserBox
                key={index}
                gender={elem.gender}
                firstname={elem.firstName}
                lastName={elem.lastName}
                position={elem.position}
                price={elem.price}/>
        }):userList.map((elem,index)=>{
            return <UserBox
                key={index}
                gender={elem.gender}
                firstname={elem.firstName}
                lastName={elem.lastName}
                position={elem.position}
                price={elem.price}/>
        })}
        </div>
    </div>
}


export default UserList