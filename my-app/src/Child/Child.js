import React, { useState } from "react";
import "./Child.css";

function Child({ onData }) {
  const [data, setData] = useState("");
  const sendData = () => {
    onData(data);
  };
  const handleInput = (e) => {
    setData(e.target.value);
  };
  return (
    <>
      <input onChange={handleInput} type="text" name="" id="" />
      <br />
      <button onClick={sendData}>set data to parent</button> 
    </>
  );
}

export default Child;
