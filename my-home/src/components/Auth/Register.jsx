import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({});

  const inputHandel = (e) => {
    setFormData((prevalue) => ({
      ...prevalue,
      [e.target.name]: e.target.value,
    }));
  };



  // user login msg
  const successMsg=()=>{
    toast.success(' Your account has been successfully created.', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      theme: "colored",
      transition: "Bounce",
      });
  }  

// tostify user is already exist msg
const errorMsg=()=>{
  toast.error('🦄 User already exists!', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: "Zoom",
    });
}

const navigate = useNavigate();

const redirectLogin = ()=> {
   navigate("/auth")
}



  const sendFormData = async () => {
    try {
      if (!formData.name || !formData.email || !formData.number || !formData.role || !formData.password) {
        alert("Please fill in all the given inputs");
      } else {
        const response = await axios.post("http://127.0.0.1:5000/api/auth/register", formData);
        console.log(response.data.error);
        setFormData({});
        // alert("Data Submitted Successfully");
        successMsg()
        setTimeout(() => {
          redirectLogin()
        }, 1500);

      }
    } catch (error) {
      // console.error("Error submitting data:", error);
      // alert("An error occurred while submitting data. Please try again later.");
      errorMsg()
    }
  };
  

  return (
    <div>
      <div className="register_container">
        <div className="register_images"></div>
        <div className="register_form">
          <div className="register_form_container">
            <div className="top_register">
              <h3 className="register_h3">Register/Signup</h3>
            </div>
            <div className="bottom_register">
              <div className="register_text_email">
                <input
                  name="name"
                  onChange={inputHandel}
                  value={formData.name || ""}
                  type="text"
                  className="name_text"
                  placeholder="Name..."
                />
                <input
                  name="email"
                  onChange={inputHandel}
                  value={formData.email || ""}
                  type="email"
                  className="name_email"
                  placeholder="E - Mail.."
                />
                <input
                  name="number"
                  onChange={inputHandel}
                  value={formData.number || ""}
                  type="text"
                  className="name_number"
                  placeholder="2236658915"
                />
                <input
                  name="password"
                  onChange={inputHandel}
                  value={formData.password || ""}
                  type="text"
                  className="name_number"
                  placeholder="Password..."
                />
              </div>
              <div className="register_radio_button">
                <label htmlFor="buyer">Buyer</label>
                <input
                  onChange={inputHandel}
                  value={"buyer"}
                  id="buyer"
                  type="radio"
                  name="role"
                  className="radio"
                />
                <label htmlFor="seller">Seller</label>
                <input
                  onChange={inputHandel}
                  value={"seller"}
                  id="seller"
                  type="radio"
                  name="role"
                  className="radio"
                />
              </div>
              <hr className="register_hr" />
              <div className="regsiter_btn">
                <li className="visit_li" typeof="submit" onClick={sendFormData}>
                  Register
                </li>
              </div>
              <div className="new_user_register">
                <NavLink
                  className={"nav-link"}
                  to={"/auth"}
                  style={{ color: "darkgreen", fontWeight: 600 }}
                >
                  Login-Now
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer/>
    </div>
  );
};

export default Register;
