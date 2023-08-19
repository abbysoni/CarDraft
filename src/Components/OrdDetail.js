import React from 'react'

const OrdDetail = (props) => {
  return (
    <div class="ml-5 mr-5">
      <div class="text-center">
        <h1>Order Detail</h1>
      </div>
      <h2>{props.packId}</h2>


      <form>
        <h4>Car Detail</h4>
        <div class="form-row ">
          <div class="col " >
            <input class="form-control mb-2" placeholder='Manufacturing Year' />
            <input class="form-control mb-2" placeholder='Odometer Reading' />
          </div>

          <div class="col">
            <input class="form-control mb-2" placeholder='Vehicle Model' />
            <input class="form-control mb-2" placeholder='Registration No.' />
          </div>
        </div>
      </form>

      <form>
        <h4>Customer details</h4>
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

        <ul class="nav nav-pills justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Walk -In</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pickup</a>
          </li>
        </ul>


      </form >

      <form>
        <h3 >Order details</h3>
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

export default OrdDetail