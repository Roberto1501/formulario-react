import React, { ButtonHTMLAttributes } from 'react';
import "./style.css"

interface ButtonAttribute extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;

}

const  Button= ({text, ...rest}: ButtonAttribute) => {

  return (
    <React.Fragment>
     <button {...rest}>
       {text}
     </button>
    
    </React.Fragment>
  );
};

export default Button;
