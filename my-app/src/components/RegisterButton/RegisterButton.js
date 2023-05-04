import React from "react"
import './RegisterButton.css';


const RegisterButton= ({klasa,text,color}) => {
  return (
   <button className={klasa} style={{backgroundColor: color}}>{text}</button>
  );
}

export default RegisterButton;
