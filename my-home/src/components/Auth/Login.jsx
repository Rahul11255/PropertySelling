import React, { useState } from "react";
import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer ,toast } from "react-toastify";
const Login = () => {
  const [formData, setformData] = useState({});
  const inputHandle = (e) => {
    setformData((prevalue) => ({
      ...prevalue,
      [e.target.name]: e.target.value,
    }));
  };

  const successMsg=()=>{
    toast.success('🦄 Login Successfull!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      theme: "colored",
      transition: "Bounce",
      });
  }

  const errorMsg=()=>{
    toast.error('Invalid email or password. Please try again later.', {
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




  const loginForm = async () => {
    try {
        if (!formData.email || !formData.password) {
            alert("Please fill in all the given inputs");
        } else {
            const response = await axios.post("http://127.0.0.1:5000/api/auth/login", formData);
            const { role, _id, name, email, number } = response.data.data;

            // Check if the response contains valid user data
              if (role && _id && name && email && number) {
                setformData({});
                successMsg()
                setTimeout(() => {
                    home();
                }, 1500);


                localStorage.setItem("_id", _id);
                localStorage.setItem("email", email);
                localStorage.setItem("number", number);
                localStorage.setItem("role", role);
                localStorage.setItem("name", name);
                localStorage.setItem("loggedIn", true);
            } else {
                // Handle invalid response (e.g., missing user data)
                alert("Invalid user data received");
            }
        }
    } catch (error) {
        // Handle errors
        if (error.response && error.response.status === 401) {
            alert("Incorrect email or password. Please try again.");
        } else {
            console.error("Error logging in:", error);
            errorMsg()
        }
    }
};


  

  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };
  return (
    <div className="login_cotainer">
      <div className="login_images"></div>
      <div className="login_form">
        <div className="register_form_container">
          <div className="top_register" style={{marginTop:"5%"}}>
            <h3 className="login_h3">login</h3>
          </div>
          <div className="bottom_register">
            <div className="register_text_email">
              <input
                onChange={inputHandle}
                value={formData.email || ""}
                name="email"
                type="email"
                className="login_name_email"
                placeholder="E - Mail.."
              />
              <input
                onChange={inputHandle}
                value={formData.password || ""}
                name="password"
                type="password"
                className="login_name_password"
                placeholder="Password..."
              />
            </div>
            <div className="login_btn">
              <li className="visit_li" typeof="submit" onClick={loginForm}>
                Login
              </li>
            </div>
            <div className="new_user_register">
              new user{" "}
              <NavLink to={"/auth/register"} className={"nav-link"}>
                Register-Now
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Login;
