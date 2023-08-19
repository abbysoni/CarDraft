import React from 'react'

const JobCard = (props) => {
  return (
      <div class="ml-5 mr-5 ">

<h1 class="text-center mb-4">Job Card</h1>
<h2 class="mb-4">{props.packId}</h2>

<div className="container">
  <h4>Edit Car details</h4>
  </div>
  <hr></hr>
  </div>

  )
}

export default JobCard