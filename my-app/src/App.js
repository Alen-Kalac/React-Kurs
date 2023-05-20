import "./App.css";
// import CardPage from "./CardPage/CardPage";
import React, { useState } from "react";
// import InputCpt from "./components/InputCpt/InputCpt";

function App() {
  

  const [loginStatus,setLoginStatus] = useState(false)

  const logIn = () =>{
  setLoginStatus(false)
  console.log("Alen")

  }
  const logOut = () =>{
  setLoginStatus(true)
  console.log("Umer")
  }

  return (
    <div className="App">
    <div className="heading"> {loginStatus ? (  <h1>Login</h1>) : (<h1>Dobro dosli !</h1> )}
    </div>
    <button onClick={ loginStatus ? logIn : logOut }>{loginStatus ? ("Login") :("Logout")}</button>
    </div>
  );
}

export default App;
