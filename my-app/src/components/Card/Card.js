import React from "react"
import './Card.css';


const Card = (props) => {
  return (
    <div className="Card">
     <h3>Name:{props.name}</h3>
     <h3>LastName:{props.lastName}</h3>
     <h3>Age:{props.age}</h3>
    </div>
  );
}

export default Card;
