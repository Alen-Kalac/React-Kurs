import React, { useState } from "react";
import "./Parent.css";
import Child from "../Child/Child";

function Parent() {

const [data,setData] = useState("")
const alen = (value) => {
setData(value)
}
  return (
    <>
      <h1>text: {data}</h1>
      <Child onData={alen} />
    </>
  );
}

export default Parent;
