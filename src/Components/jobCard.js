import React from 'react'

const JobCard = (props) => {

  const togglePartsList = () => {
    alert("Add parts from the listing")
  };

  const toggleServicesList = () => {
    alert("Add services from the listing")
  };

  // const removePart = (index) => {
  //   const updatedPartsList = [...partsList];
  //   updatedPartsList.splice(index, 1);
  //   setPartsList(updatedPartsList);
  // };

  return (
    <div class="ml-5 mr-5 ">

      <h1 class="text-center mb-4">Job Card</h1>
      <h2 class="mb-4">{props.packId}</h2>

      <div className="container mb-5">
        <h5>Edit Car details{' '}
          <button
            className="edit-icon"
            onClick={() => {
              alert("EDit detail previously filled")
              // Handle navigation to order detail screen
            }}
          >
            🖊️
          </button>
        </h5>
      </div>

      <h4>Parts detail{" "}
      <span
          className="add-icon"
          onClick={togglePartsList}
        >
          ➕
        </span>
      </h4>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Qty</th>
            <th scope="col">price</th>
            <th scope="col" >Amount</th>
            <th scope ="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Piston rings</td>
            <td>5</td>
            <td>150</td>
            <td>750</td>
            <td scope ="col">
            <button
            className="btn btn-link"
            // onClick={() =>
            //   //  removePart(index)
            //   }
          >
            ❌
          </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Piston rings</td>
            <td>5</td>
            <td>150</td>
            <td>750</td>
            <td scope ="col">
            <button
            className="btn btn-link"
            // onClick={() =>
            //   //  removePart(index)
            //   }
          >
            ❌
          </button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Piston rings</td>
            <td>5</td>
            <td>150</td>
            <td>750</td>
            <td scope ="col">
            <button
            className="btn btn-link"
            // onClick={() =>
            //   //  removePart(index)
            //   }
          >
            ❌
          </button>
            </td>
          </tr>
        </tbody>
      </table>


      <h4 class="mt-5">Service detail{" "}
      <span
          className="add-icon"
          onClick={togglePartsList}
        >
          ➕
        </span>
        </h4>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name of service</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Tyre Change</td>
            <td>500</td>
            <td scope ="col">
            <button
            className="btn btn-link"
            // onClick={() =>
            //   //  removePart(index)
            //   }
          >
            ❌
          </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Oil Change</td>
            <td>500</td>
            <td scope ="col">
            <button
            className="btn btn-link"
            // onClick={() =>
            //   //  removePart(index)
            //   }
          >
            ❌
          </button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Cleaning Charge</td>
            <td>100</td>
            <td scope ="col">
            <button
            className="btn btn-link"
            // onClick={() =>
            //   //  removePart(index)
            //   }
          >
            ❌
          </button>
            </td>
          </tr>
        </tbody>
      </table>

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