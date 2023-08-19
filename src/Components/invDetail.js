import React from 'react';
import { useState } from 'react';

const InvDetail = (props) => {

  const [inputText, setInputText] = useState('');
  const [inputFields, setInputFields] = useState([
    { id: 1, text: '', count: 0 },
    { id: 2, text: '', count: 0 },
    { id: 3, text: '', count: 0 },
    { id: 4, text: '', count: 0 },
    { id: 5, text: '', count: 0 },
    { id: 6, text: '', count: 0 },
  ]);

  const handleIncrement = (index) => {
    const updatedFields = [...inputFields];
    updatedFields[index].count += 1;
    setInputFields(updatedFields);
  };

  const handleDecrement = (index) => {
    const updatedFields = [...inputFields];
    if (updatedFields[index].count > 0) {
      updatedFields[index].count -= 1;
      setInputFields(updatedFields);
    }
  };

  const handleInputChange = (event, index) => {
    const updatedFields = [...inputFields];
    updatedFields[index].text = event.target.value;
    setInputFields(updatedFields);
  };

  // to handle multiple image uploads
  const [selectedFilesField1, setSelectedFilesField1] = useState([]);
  const [selectedFilesField2, setSelectedFilesField2] = useState([]);

  const handleFileChangeField1 = (event) => {
    const files = event.target.files;
    const newSelectedFiles = [...selectedFilesField1];
  
    for (let i = 0; i < files.length && newSelectedFiles.length < 4; i++) {
      newSelectedFiles.push(files[i]);
    }

    setSelectedFilesField1(newSelectedFiles);
  };

  const handleFileChangeField2 = (event) => {
    const files = event.target.files;
    const newSelectedFiles = [...selectedFilesField2];
  
    for (let i = 0; i < files.length && newSelectedFiles.length < 4; i++) {
      newSelectedFiles.push(files[i]);
    }

    setSelectedFilesField2(newSelectedFiles);
  };



  const removeSelectedFileField1 = (index) => {
    const newSelectedFiles = [...selectedFilesField1];
    newSelectedFiles.splice(index, 1);
    setSelectedFilesField1(newSelectedFiles);
  };

  const removeSelectedFileField2 = (index) => {
    const newSelectedFiles = [...selectedFilesField2];
    newSelectedFiles.splice(index, 1);
    setSelectedFilesField2(newSelectedFiles);
  };



  return (
    <div class="ml-5 mr-5 ">

      <h1 class="text-center mb-4">Inventory Detail</h1>
      <h2 class="mb-4">{props.packId}</h2>

      <div className="container">
        <h4>Inventory Count</h4>
        <div className="row">
          {inputFields.map((field, index) => (
            <div className="col-md-4 mb-3" key={field.id}>
              <form>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={`Enter text ${field.id}...`}
                    value={field.text}
                    onChange={(event) => handleInputChange(event, index)}
                  />
                  <div className="input-group-append">
                    <input
                      type="text"
                      className="form-control text-center"
                      style={{ maxWidth: '3rem' }}
                      value={field.count}
                      readOnly
                    />
                    <div className="input-group-text">
                      <div className="d-flex flex-column align-items-center">
                        <button
                          className="btn btn-link p-0"
                          type="button"
                          onClick={() => handleIncrement(index)}
                        >
                          <span role="img" aria-label="Up Arrow">&#x25B2;</span>
                        </button>
                        <button
                          className="btn btn-link p-0"
                          type="button"
                          onClick={() => handleDecrement(index)}
                        >
                          <span role="img" aria-label="Down Arrow">&#x25BC;</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </form>
            </div>
          ))}
        </div>
      </div>

      <h4 class="mt-4">Car Exterior Image</h4>
      <div className="input-group">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile01"
                  multiple
                  onChange={(event) => handleFileChangeField1(event)}
                />
                <label className="custom-file-label" htmlFor="inputGroupFile01">
                <div className="file-display-container">
                  {selectedFilesField1.length > 0
                    ? selectedFilesField1.map((file, index) => (
                        <div key={index} className="d-flex align-items-center file-container" >
                          <span className="file-name" title={file.name}>{file.name.substring(0, 15)}</span>
                          <button
                            className="btn btn-link ml-0"
                            type="button"
                            onClick={() => removeSelectedFileField1(index)}
                          >
                            &#x2715;
                          </button>
                        </div>
                      ))
                    : 'Choose files'}
                    </div>
                </label>
              </div>
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                  Upload
                </button>
              </div>
            </div>

      <h4 class="mt-4">Car interior Image</h4>
      <div className="input-group">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile02"
                  multiple
                  onChange={(event) => handleFileChangeField2(event)}
                />
                <label className="custom-file-label" htmlFor="inputGroupFile02">
                <div className="file-display-container">
                  {selectedFilesField2.length > 0
                    ? selectedFilesField2.map((file, index) => (
                        <div key={index} className="d-flex align-items-center file-container">
                          <span className="file-name">{file.name.substring(0, 10)}</span>
                          <button
                            className="btn btn-link ml-2"
                            type="button"
                            onClick={() => removeSelectedFileField2(index)}
                          >
                            &#x2715;
                          </button>
                        </div>
                      ))
                    : 'Choose files'}
                    </div>
                </label>
              </div>
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                  Upload
                </button>
              </div>
            </div>

      <h4 class="mt-4">Fuel Meter</h4>
      <input type="range" class="form-range" style={{ width: '80%' }} min="0" max="5" step="0.5" id="customRange3"></input>

      <h4 class="mt-4">Other remarks</h4>
      <input class="form-control mb-2 " placeholder='Enter other details here' />

      <ul class="nav nav-pills justify-content-end">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Save and Next</a>
          </li>
        </ul>

      <hr></hr>
    </div >
  )
}

export default InvDetail