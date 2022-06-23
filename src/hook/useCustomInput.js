import React, {useState} from "react";

const UseCustomInput = () => {

  const [value, setValue] = useState('')
  const onChangeInput = (e) => {
    setValue(e.target.value)
  }

  return {onChangeInput, value}
}
export default UseCustomInput