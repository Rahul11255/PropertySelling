import axios from "axios";
import React, { useEffect, useState } from "react";
import "../SingleCard/single.css";
import { useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Singleproperty = () => {
  const Location = useLocation();
  const path = Location.pathname.split("/")[2];
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/api/singleproperty/${path}`)
      .then((res) => {
        console.log(res.data);
        setCard(res.data);
      });
  }, [path]);

  return (
    <div className="single_container">
      <div className="navbar_register_container">
        <Navbar />
      </div>
      <div className="single_body_container">
        <div className="single_body_top_images">
          <div className="glass_container">Welcome your new dream home.</div>
        </div>
        {card.map((data) => {
          return (
            <div className="single_property_details" key={data._id}>
              <div className="single_left_image">
                <img className="left_images" src={data.images} alt="" />
              </div>
              <div className="single_right_details">
                <div className="right_particular_Detials">
                   <p className="single_right_P"> <span className="single_span"> property name : </span>  {data.propertyname}</p>
                </div>
                <div className="right_particular_Detials">
                  <p className="single_right_P"> <span className="single_span"> dimensions : </span> {data.dimensions}</p>
                </div>
                <div className="right_particular_Detials">
                  <p className="single_right_P"> <span className="single_span"> price : </span> {data.price}</p>
                </div>
                <div className="right_particular_Detials">
                  <p className="single_right_P">  <span className="single_span"> address : </span> {data.address}</p>
                </div>
                <div className="contact_details">
                  contact details
                </div>
                <div className="right_particular_Detials">
                  <p className="single_right_P"> <span className="single_span"> Dealer Name : </span> {data.username}</p>

                </div>
                <div className="right_particular_Detials">
                  <p className="single_right_P">  <span className="single_span"> number : </span> {data.number}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Singleproperty;
