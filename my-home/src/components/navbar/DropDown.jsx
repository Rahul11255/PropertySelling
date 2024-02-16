import React from "react";
import "../navbar/navbar.css";

const DropDown = (props) => {
  // console.log(props.data1);
  return (
    <ul className="dropdown_menu">
      <li className="dropdown_menu_items">{props.data1}</li>
      <li className="dropdown_menu_items">{props.data2}</li>
      <li className="dropdown_menu_items">{props.data3}</li>
    </ul>
  );
};

export default DropDown;
