import React, { useState } from "react";
import "../Onboard/Login.css"

// removed below libraries because i had to install them on my system


// import "../Login/Login.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import {
//   faEnvelope,
//   faLocationCrosshairs,
//   faUser,
//   faUnlockAlt,faMobileAlt,faIdBadge,
// } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";

// library.add(
//   faEnvelope,
//   faUser,
//   faUnlockAlt,
//   faMobileAlt,
//   faIdBadge,
//   faLocationCrosshairs
// );

const LoginC = (props) => {

  // removed selectedForm usestate as its not required now . the type comes as prop from header
   
  var selectedForm = props.userType; //new
  

  const [CustomerDetail, setCustomerDetail] = useState({
    email: "",
    password: "",
  });
  const [GarageDetail, setGarageDetail] = useState({
    Mobile: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const customerData = {
        CustEmail: CustomerDetail.email,
        CustPassword: CustomerDetail.password,
      };

      const garageData = {
        GarageMobile: GarageDetail.Mobile,
        Password: GarageDetail.password,
      };

      const data = (props.userType === "garage") ? garageData : customerData;
      const apiUrl =
        selectedForm === "garage"
          ? "http://localhost:63650/api/Garage/login"
          : "http://localhost:63650/api/Customer/Login";


      // commeted below code so that i need not to install the library

      // try {
      //   const response = await axios.post(apiUrl, data);
      //   debugger;
      //   console.log(response.data.Status);
      // } catch (error) {
      //   console.error("Error making post request:", error);
      // }

      // Clear form after submission
      setGarageDetail({
        Mobile: "",
        password: "",
      });

      setCustomerDetail({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (selectedForm === "garage") {
      setGarageDetail((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setCustomerDetail((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };




  return (
    <div>Login {props.userType}
       {/* removed below two divs because they covered whole screen, you can change style and use them */}

      {/* <div className="main"> */}
        {/* <div style={{ margin: "100px 700px" }} className="main-block"> */}
          <h1>Login</h1>
          <hr />
          <div className="account-type">
            
            {props.userType}

            {/* no need of them here already added buttons to select usertype from header */}

            {/* <input
              type="radio"
              value="garage"
              id="radioTwo"
              checked={selectedForm === "garage"}
              onChange={() => setSelectedForm("garage")}
              name="account"
            />
            <label htmlFor="radioTwo" className="radio">
              Garage
            </label>

            <input
              type="radio"
              value="customer"
              id="radioOne"
              checked={selectedForm === "customer"}
              onChange={() => setSelectedForm("customer")}
              name="account"
            />
            <label htmlFor="radioOne" className="radio">
              Customer
            </label> */}
          </div>
          <form onSubmit={handleSubmit}>
            
            {selectedForm === "garage" && (
              <div>
                <div>
                  <label For="Mobile " id="icon">

                  {/* commeted below code so that i need not to install the library */}

                    {/* <FontAwesomeIcon icon={faMobileAlt} /> */}
                  </label>
                  &nbsp;&nbsp;
                  <input
                    type="text"
                    name="Mobile"
                    id="garageMobile "
                    placeholder="Mobile "
                    value={GarageDetail.Mobile}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label For="password" id="icon">

                  {/* commeted below code so that i need not to install the library */}
                    {/* <FontAwesomeIcon icon={faUnlockAlt} /> */}
                  </label>
                  &nbsp;&nbsp;
                  <input
                    type="password"
                    name="password"
                    id="garagepassword"
                    placeholder="Password"
                    value={GarageDetail.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            )}

            {selectedForm === "customer" && (
              <div>
                <div>
                  <label For="email" id="icon">

                  {/* commeted below code so that i need not to install the library */}
                    {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                  </label>
                  &nbsp;&nbsp;
                  <input
                    type="text"
                    name="email"
                    id="customeremail"
                    placeholder="Email"
                    value={CustomerDetail.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label For="password" id="icon">

                  {/* commeted below code so that i need not to install the library */}
                    {/* <FontAwesomeIcon icon={faUnlockAlt} /> */}
                  </label>
                  &nbsp;&nbsp;
                  <input
                    type="password"
                    name="password"
                    id="customerpassword"
                    placeholder="Password"
                    value={CustomerDetail.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            )}

            <hr></hr>

    
            <button className="button" type="submit">
              Submit
            </button>
          </form>
        {/* </div> */}
      {/* </div> */}

    </div>
  );
}

export default LoginC;




