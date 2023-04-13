import React from "react"
import "./Header.css"

function Header() {
  return (
    <div className="App">
<div class="navbar">
            <div class="navbar-left">
                <div><h1>LOGO</h1></div>
                <ul>
                    <li><a href="">Product </a></li>
                    <li><a href="">Company </a></li>
                    <li><a href="">Connect </a></li>
                </ul>
            </div>
            <div class="navbar-buttons">
                <button class="button-login">Login</button>
                <button class="button-sign-up">Sign Up</button>
            </div>
        </div>
      
    </div>
  );
}

export default Header;
