import React from "react";
import { InputContainer } from "./styles";

const Input = ({value}) => {
  return( 
  <InputContainer>
    <input value = {value} type="text" disabled></input>
  </InputContainer>
)
  
};
export default Input
