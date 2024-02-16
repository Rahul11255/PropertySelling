import React, { useEffect, useState } from "react";
import "./view.css";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import viewhouse from "../images/viewhouse.png";
import viewmap from "../images/viewmap.png";
import viewrupee from "../images/viewrupee.png";
import { NavLink } from "react-router-dom";

const View = () => {
  const [propdata, setPropdata] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/property").then((res) => {
      console.log(res.data);
      setPropdata(res.data);
    });
  }, []);

  return (
    <div className="view_container">
      <div className="navbar_register_container">
        <Navbar />
      </div>
      <div className="view_Container">
        <div className="card_container">
          {propdata.map((data) => {
            return (
              <div className="view_card_container">
                <div className="view_card">
                  <div className="view_img_div">
                  <p className="Card_view_date">{new Date(data.createdAt).toDateString()}</p>

                    <NavLink to={`/propertycard/${data._id}`}>
                      <img
                        className="view_card_img"
                        src={data.images}
                        alt="card_images"
                      />
                    </NavLink>
                  </div>

                  <div className="view_card_text_container">
                    <div className="prtname_text">
                      <img className="icon_view_img" src={viewhouse} alt="" />
                      <h5 className="prtname_h5">{data.propertyname}</h5>
                    </div>
                    <div className="prtname_text">
                      <img className="icon_view_img" src={viewmap} alt="" />
                      <h6 className="prtname_h6">{data.address}</h6>
                    </div>
                    <div className="prtname_text">
                      <img className="icon_view_img" src={viewrupee} alt="" />
                      <p className="prtname_p">{data.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default View;
