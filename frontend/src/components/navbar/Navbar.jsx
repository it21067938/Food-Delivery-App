import React, { useContext, useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {

  const {getTotalCartAmount} = useContext(StoreContext);
  const [menu, setMenu] = useState("Home");

  return (
    <div className="navbar">
      <Link to="/"><img src={Logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to="/"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("Mobile-App")}
          className={menu === "Mobile-App" ? "active" : ""}
        >
          Mobile-App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact-Us")}
          className={menu === "Contact-Us" ? "active" : ""}
        >
          Contact-Us
        </a>
      </ul>
      <div className="navbar-right">
        <SearchIcon />
        <Link to="/cart">
          <ShoppingBasketIcon />
        </Link>
        <div className={getTotalCartAmount() === 0? "" : "dot"}></div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
