import React from "react"
import './Header.css';
import {Link} from "react-router-dom";


const Header = () => {
  return (
   <ul>
    <li><Link style={{textDecoration: 'none'}} to="/">Home</Link></li>
    <li><Link style={{textDecoration: 'none'}} to="/about">About</Link></li>
    <li><Link style={{textDecoration: 'none'}} to="/contact">Contact</Link></li>
   </ul>
  );
}

export default Header;
