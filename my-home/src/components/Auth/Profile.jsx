import React, { useState } from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

const Profile = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const logout = () => {  
    localStorage.clear();
    navigate("/");
  };

  const role = localStorage.role;
  console.log(role);

  return (
    <div className="profile_container_top">
      <div className="navbar_register_container">
        <Navbar />
      </div>
      <div className="profile_container">
        <div className="profile_Data">
          <AccountCircleIcon
            sx={{ fontSize: 135 }}
            color="primary"
            className="profile_icon"
          />
          <p className="user_details" style={{ textTransform: "uppercase" }}>
            Name: {localStorage.name}
          </p>
          <p className="user_details">EMAIL: {localStorage.email}</p>
          <p className="user_details" style={{ textTransform: "uppercase" }}>
            Role: {localStorage.role}  
          </p>
          <p className="user_details" style={{ textTransform: "uppercase" }}>
            Number: {localStorage.number}
          </p>
        </div>
        <div className="profile_img">
          <div className="logout_btn" onClick={toggle}>
            <p className="logout_btn_p"> log-out </p>
          </div>
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Logout Confirmation</ModalHeader>
        <ModalBody>
          Are you sure you want to logout?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={logout}>Logout</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Profile;
