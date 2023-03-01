import { type } from 'os';
import React from 'react';
import "./style.css"

interface InputAttributes {
  type: string;
  placeholder: string;
}

const Input = ({type, placeholder}: InputAttributes)=> {
  return (
    <React.Fragment>
      <input  type= {type} placeholder= {placeholder} />
      
    </React.Fragment>
  );
};

export default Input;
