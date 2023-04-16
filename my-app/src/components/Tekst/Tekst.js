import React from "react"
import './Tekst.css';


const Tekst = (props) => {
  return (
    <div className="Tekst">
       <h3>{props.tekst}</h3>
    </div>
  );
}

export default Tekst;
