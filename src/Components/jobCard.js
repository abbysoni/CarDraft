import React from 'react'

const JobCard = (props) => {
  return (
    <div class="ml-5 mr-5 ">

      <h1 class="text-center mb-4">Job Card</h1>
      <h2 class="mb-4">{props.packId}</h2>

      <div className="container">
        <h4 class="mb-4">Edit Car details</h4>
      </div>

      <h4>Parts detail</h4>
        <div className="row">
        <div className="col" >Name  </div>
        <div className="col" >Qty</div>
        <div className="col" >Amount</div>
        <div className="col" >Price</div>
        </div>

        <div className="row">
        <div className="col" >Name  </div>
        <div className="col" >Qty</div>
        <div className="col" >Amount</div>
        <div className="col" >Price</div>
        </div>

        <div className="row">
        <div className="col" >Name  </div>
        <div className="col" >Qty</div>
        <div className="col" >Amount</div>
        <div className="col" >Price</div>
        </div>

        <h4 class="mt-4">Services</h4>
        <div className="row">
        <div className="col" >Name of service </div>
        <div className="col" >price</div>
        </div>

        <div className="row">
        <div className="col" >Name of service </div>
        <div className="col" >price</div>
        </div>

        <div className="row">
        <div className="col" >Name of service </div>
        <div className="col" >price</div>
        </div>

        <div class="nav-item text-center mt-5">
        <button className="btn btn-outline-secondary mr-5" type="button">
                  Save and send
                </button>
               
                
                <button className="btn btn-outline-secondary ml-5" type="button">
                  Invoice
                </button>
                </div>

      <hr></hr>
    </div>

  )
}

export default JobCard