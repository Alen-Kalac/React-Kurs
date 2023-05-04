import "./App.css";
// import CardPage from "./CardPage/CardPage";
import React, {useState} from 'react';
// import InputCpt from "./components/InputCpt/InputCpt";




function App() {
  let [text,setText] = useState("")
  const update =(e) =>{
   setText(e.target.value)
  }
  
  


  return (
    <div className="App">
     <div className="counterDiv">
    <input onChange={update}  type="text" className="textGrab" placeholder="Unesite zeljeni text"></input>
    <h1>Uneli ste: {text} </h1>
     </div>
    </div>
  );
}

export default App;
