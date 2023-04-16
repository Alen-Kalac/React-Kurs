import React from "react"
import './RegisterButton.css';


const RegisterButton= ({text,color,hover}) => {
  return (
   <button className="registerButton" style={{backgroundColor: color}}>{text}</button>
  );
}

export default RegisterButton;
