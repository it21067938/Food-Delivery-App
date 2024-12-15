import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Navbar() {

  const [menu, setMenu] = useState("Home")
  return (
    <div className="navbar">
      <img src={Logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={() => setMenu("Home")} className={menu==="Home" ? "active" : ""}>Home</li>
        <li onClick={() => setMenu("Menu")} className={menu==="Menu" ? "active" : ""}>Menu</li>
        <li onClick={() => setMenu("Mobile-App")} className={menu==="Mobile-App" ? "active" : ""}>Mobile-App</li>
        <li onClick={() => setMenu("Contact-Us")} className={menu==="Contact-Us" ? "active" : ""}>Contact-Us</li>
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
