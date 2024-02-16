import React, { useEffect, useState } from "react";
import "./create.css";
import Navbar from "../navbar/Navbar";
import AddHomeWorkOutlinedIcon from "@mui/icons-material/AddHomeWorkOutlined";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios"
import { Link } from "react-router-dom";



const Create = () => {
  const [modal, setModal] = useState(false);
  const [propertydata, setPropertydata] = useState({
    user_id: localStorage._id,
    username: localStorage.name,
    number: localStorage.number,
  });
  const [property ,setProperty] = useState([])
  const modalHandle = () => {
    setModal(!modal);
  };

  const handleProperty = (e) => {
    setPropertydata((prevalue) => ({
      ...prevalue,
      [e.target.name]: e.target.value,
    }));
  };

  const savePropertyData = () => {
    if (
      propertydata.propertyname == null ||
      propertydata.address == null ||
      propertydata.dimensions == null ||
      propertydata.price == null ||
      propertydata.images == null
    ) {
      alert("kindly please fill-up all details ");
    } else {
      axios.post("http://127.0.0.1:5000/api/property" ,propertydata).then((res)=>{
        setPropertydata({})   
        setModal(!modal)
        getUserproperty()
        alert("Data Submitted Successfully")     
      }).catch((err)=>{
        console.log(err);
        }); 
    }
  };
  const id= localStorage._id
 
  useEffect(()=>{
    getUserproperty()
  },[id])
  

   const getUserproperty = ()=>{
    axios.get(`http://127.0.0.1:5000/api/property/${localStorage._id}`).then((res)=>{
       console.log(res.data)
       setProperty(res.data)
    })
   }


  return (
    <div className="create_container">
      <div className="navbar_register_container">
        <Navbar />
      </div>
      <Modal
        className="modalcontainer"
        size="lg"
        isOpen={modal}
        toggle={modalHandle}
      >
        <ModalHeader className="modalHeader" toggle={modalHandle}>
          <p className="modalheader_text"> Property-details</p>
        </ModalHeader>

        <ModalBody className="modalbody">
          <div className="create_form_body">
            <div className="visit_name_email">
              <input
                onChange={handleProperty}
                value={propertydata.propertyname || ""}
                name="propertyname"
                type="text"
                className="input_text"
                placeholder="Property name...."
              />
              <input
                onChange={handleProperty}
                value={propertydata.address || ""}
                name="address"
                type="text"
                className="input_text"
                placeholder="Address.."
              />
              <input
                onChange={handleProperty}
                value={propertydata.dimensions || ""}
                name="dimensions"
                type="text"
                className="input_text"
                placeholder="Dimensions.."
              />
              <input
                onChange={handleProperty}
                value={propertydata.price || ""}
                name="price"
                type="number"
                className="input_text"
                placeholder="Price..."
              />
              <input
                onChange={handleProperty}
                value={propertydata.images || ""}
                name="images"
                type="text"
                className="input_text"
                placeholder="images"
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter className="modalfooter" style={{backgroundColor:"rgb(27, 67, 100)"}}>
          <button className="modalfooterbutton btn btn-outline-info" onClick={savePropertyData} >
            Submit
          </button>
        </ModalFooter>
      </Modal>
      <div className="create_property" onClick={() => setModal(true)}>
        <p className="property_text">
          <AddHomeWorkOutlinedIcon /> -Create
        </p>
      </div>
      <div className="create_container_1">
        <div className="create_left">
         <div className="left_top_headline"> <h1 className="headline_text">Property-List</h1> <p className="owener_name" >{localStorage.name}</p></div>
         <hr className="list_hr" />
         <hr className="list_hr_1" />
         <div className="list_Container">
           <ol>
           {property.map((list)=>{
            return(
              <div key={list._id} >
              <li className="list_li" key={list._id} >{list.propertyname}</li>
              </div>
            )
           })}
          
           </ol>
         </div>
        </div>
        <div className="create_right">
          <div className="right_container">
          {property.map((data)=>{
            return(
              <div className="right_container_itmes" key={data._id}>
                <div className="card_top_headline">
                  <p>{data.propertyname}</p>
                  <p>rs: {data.price}</p>
                </div>
                <Link to={`/propertycard/${data._id}`}>
                <div className="card_images_container"><img className="card_images" src={data.images} alt="" /></div>
                </Link>
                {/* <div className="card_dimensions">Dimensions : {data.dimensions}</div>
                <div className="card_address">Address : {data.address}</div> */}
             </div>
            )
          })}
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
