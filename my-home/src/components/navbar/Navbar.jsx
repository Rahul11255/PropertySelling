import React, { useState } from "react";
import "../navbar/navbar.css";
import logo from "../images/logo-1.png";
import DropDown from "./DropDown";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Navbar = () => {
  const [mobile, setmobile] = useState(true);

  const toggleButton = () => {
    setmobile(!mobile);
  };
  const test = localStorage.role === "seller"; 
  const checkCreate = test && localStorage.loggedIn;
 

   
  console.log(checkCreate)

  return (
    <div className="navbar_container">
      <div className="logo_container">
        <NavLink to="/">
          <img src={logo} className="logo" alt="logo" />
        </NavLink>
        <div className="toggle_button" onClick={toggleButton}>
          {mobile ? (
            <DensitySmallIcon
              style={{ color: "black" }}
              sx={{ fontSize: 40 }}
            />
          ) : (
            <CloseIcon sx={{ fontSize: 40 }} />
          )}
        </div>
      </div>
      <div className={mobile ? "mobile-size link_items" : "link_items"}>
        <div className="dropdown_content  ">
          <NavLink to={"/"} className="navlink">
            <p className="p_links">home</p>
          </NavLink>
        </div>
        <div className="dropdown_content ">
          <p className="p_links">pages</p>
        </div>
        <div className="dropdown_content ">
          <p className="p_links"> apartment </p>
        
        </div>
        <div className="dropdown_content ">
        <NavLink to={"/view"} className={"navlink"}>
          <p className="p_links"> view </p>
          </NavLink>
        </div>
        <div className="dropdown_content ">
          {checkCreate ? (
            <NavLink to={"/user/createproperty"} className={"navlink"}>
              <AddIcon className="plus_icon" sx={{ fontSize: 17 }} />
              <p className="p_links"> create </p>
            </NavLink>
          ) : (
            null
          )}
        </div>
        <div className="dropdown_content ">
          {localStorage.loggedIn ? (
            <NavLink to={"/user/profile"} className="navlink">
              <p className="p_links">
                <AccountCircleOutlinedIcon
                  className="profile_icon"
                  sx={{ fontSize: 40 }}
                />
              </p>
            </NavLink>
          ) : (
            null
          )}
        </div>
        <div className="dropdown_content  signup ">
          {localStorage.loggedIn ? (
            null
          ) : (
            <NavLink to={"/auth"} className="navlink">
              <p className="Signup_links">Join-Us </p>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
