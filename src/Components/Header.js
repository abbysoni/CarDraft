import React from 'react';
import { useState } from 'react';
import LoginC from '../Onboard/LoginC'; //
import LoginG from '../Onboard/LoginG'; //
import Modal from 'react-modal';//

// this function
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
//

const Header = () => {

  // from here
  const [userType,setUserType] = useState("customer");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

 

  function closeModal() {
    setIsOpen(false);
  }
  //to here


  return (
    <div>
        {/* from here */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>close</button>
          <div>
            <button onClick={()=>setUserType("customer")}>Customer</button>
            <button onClick={()=>setUserType("garage")}>Garage</button>
            <LoginC userType={userType}/>
            <LoginG/>
          </div>
          
        </Modal>
        {/* to here */}
     


      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Car Repair</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>

            {/* use lin or href anywhere to create a button and onclick call openModal() */}
            <li class="nav-item">
              <a class="nav-link" href="#" onClick={()=> openModal()}>Login Via Popup</a>
            </li>
            {/* till here */}


            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Register
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Customer</a>
                <a class="dropdown-item" href="#">Garage</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>





          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  )
}

export default Header