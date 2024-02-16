import React from "react";
import "./hiv.css";
import house from "../images/house.png";
import tablepots from "../images/tablepots.png";
import beach from "../images/beach.png";

const Hiv = () => {
  return (
    <div className="hiv_container">
      <div className="hiv_items">
        <div className="hiv_h1_text">HOUSES</div>
        <div className="hiv_p_text">At vero eos et accusamus <br /> et iusto odio dignissi</div>
        <div className="hiv_img">
        <img className="house_img" src={house} alt="house" />
        </div>
      </div>
      <div className="hiv_items mr">
        <div className="hiv_h1_text" >INTERIORS</div>
        <div className="hiv_p_text">At vero eos et accusamus <br /> et iusto odio dignissi</div>
        <div className="hivtable_img" >
        <img className="table_img" src={tablepots} alt="tablepots" />
        </div>
      </div>
      <div className="hiv_items">
        <div className="hiv_h1_text" >beach </div>
        <div className="hiv_p_text">At vero eos et accusamus <br /> et iusto odio dignissi</div>
        <div className="hivbeach_img">
         <img className="beach_img" src={beach} alt="tablepots" />
        </div>
      </div>
    </div>
  );
};

export default Hiv;
