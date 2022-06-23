import React, {useState} from "react";

function useInput() {
  const [value, setValue] = useState("");
  const inputChange = (e) => {
    setValue(e.target.value)
  };
  return [value, inputChange];
}

export default useInput
