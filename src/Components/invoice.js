import React, { useState, useEffect }  from 'react';

const Invoice = (props) => {
  const [info, setInfo] = useState('');

  const handleInfoChange = (event) => {
    setInfo(event.target.value);
  };

  const backendInfo = ([
    "Order Value: rs 540",
    "discount : rs 40",
    "Grand Total : rs 500"
  ]);

  
  

  return (
    <div className="ml-5 mr-5">
      <h1 className="text-center mb-4">Invoice</h1>
      <h2 className="mb-4">{props.packId}</h2>

      <div className="container">
        <h4 className="mb-4">
          Edit Car details{' '}
          <span
            className="edit-icon"
            onClick={() => {
              // Handle navigation to order detail screen
            }}
          >
            🖊️
          </span>
        </h4>
      </div>

      <h4 className="text-center mb-4">Order Information</h4>
      
      <div className="form-group">
        <textarea
          className="form-control"
          id="infoInput"
          rows="5"
          value={info}
          onChange={handleInfoChange}
        />
      </div>

      

      <div className="row">
        <div className="col-md-6">
          <h4 className="mt-4">Account Summary</h4>
          <div className="backend-info-box">
            <table>
              <tbody>
                {backendInfo.map((info, index) => (
                  <tr key={index}>
                    <td>{info}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-6">
          <div className="text-center justify-content-center">
            <button className="btn btn-primary mt-3" type="button">
              Add Coupon
            </button>
          </div>
        </div>
      </div>



      <div className="nav-item text-center mt-5">
        <button className="btn btn-outline-secondary mr-5" type="button">
          Save and send
        </button>

        <button className="btn btn-outline-secondary ml-5" type="button">
          Generate Invoice
        </button>
      </div>

      <hr />
    </div>
  );
};

export default Invoice;
