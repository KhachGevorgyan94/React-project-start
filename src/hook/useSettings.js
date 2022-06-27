import React, {useEffect, useState} from "react";


const UseSettings = () => {

  const [token, setToken] = useState('')
  useEffect(() => {
    console.log(token)
  }, [token])

  return {token, setToken}


}

export default UseSettings