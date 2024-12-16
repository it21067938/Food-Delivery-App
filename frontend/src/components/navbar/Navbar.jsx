import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom';
function Navbar() {

  const [menu, setMenu] = useState("Home")
  return (
    <div className="navbar">
      <img src={Logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <Link onClick={() => setMenu("Home")} className={menu==="Home" ? "active" : ""}>Home</Link>
        <a href="#explore-menu" onClick={() => setMenu("Menu")} className={menu==="Menu" ? "active" : ""}>Menu</a>
        <a href="#app-download" onClick={() => setMenu("Mobile-App")} className={menu==="Mobile-App" ? "active" : ""}>Mobile-App</a>
        <a href="#footer" onClick={() => setMenu("Contact-Us")} className={menu==="Contact-Us" ? "active" : ""}>Contact-Us</a>
      </ul> 
      <div className="navbar-right">
        <SearchIcon />
        <ShoppingBasketIcon />
        <button>Sign in</button>
      </div>
    </div>
  );
}

export default Navbar;
