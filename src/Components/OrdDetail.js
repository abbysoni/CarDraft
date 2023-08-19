import React from 'react'
import { useState } from 'react';


const OrdDetail = (props) => {

const [selectedButton, setSelectedButton] = useState();

const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  }

  return (
    <div class="ml-5 mr-5">
      <div class="text-center mb-3">
        <h1>Order Detail</h1>
      </div>
      <h2 class="mb-4" >{props.packId}</h2>


      <form>
        <h4>Car Detail</h4>
        <div class="form-row ">
          <div class="col " >
            <input class="form-control mb-2 " placeholder='Manufacturing Year' />
            <input class="form-control mb-2" placeholder='Odometer Reading' />
          </div>

          <div class="col">
            <input class="form-control mb-2" placeholder='Vehicle Model' />
            <input class="form-control mb-2" placeholder='Registration No.' />
          </div>
        </div>
      </form>

      <form>
        <h4 class="mt-4">Customer details</h4>
        <div class="form-row ">
          <div class="col " >
            <input class="form-control mb-2" placeholder='Customer Name' />
            <input Type="" class="form-control mb-2" placeholder='E-mail' />
          </div>

          <div class="col">
            <input class="form-control mb-2" placeholder='Mobile No.' />
            <input class="form-control mb-2" placeholder='Address' />
          </div>
        </div>

        <ul class="nav nav-pills justify-content-center mb-4">
          <li class="nav-item">

            <button
              className={`btn btn-${selectedButton === 'button1' ? 'primary' : 'outline-primary'}`}
              onClick={() => handleButtonClick('button1')}
            >
              Walk In
            </button>
          </li>
          <li class="nav-item ml-3">
        
            <button
              className={`btn btn-${selectedButton === 'button2' ? 'primary' : 'outline-primary'}`}
              onClick={() => handleButtonClick('button2')}
            >
              Pickup
            </button>
          </li>
        </ul>


      </form >

      <form>
        <h3>Order details</h3>
        <div class="form-row ">
          <div class="col " >
            <input class="form-control mb-2" placeholder='Service Name' />
            <input Type="" class="form-control mb-2" placeholder='orderID' value={props.ordId}/>
          </div>

          <div class="col">
            <input class="form-control mb-2" placeholder='Garage Name' />
            {/* <input class="form-control mb-2" placeholder='Garage Address' /> */}
          </div>
        </div>
        
        <ul class="nav nav-pills justify-content-end">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Save and Next</a>
          </li>
        </ul>
 
      </form >

      <hr></hr>
    </div >

  )
}

export default OrdDetail;