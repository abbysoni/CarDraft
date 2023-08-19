import React from 'react'

const Invoice = (props) => {
  return (
    <div>
        <h1>invoice</h1>
        <h2>{props.packId}</h2>
        <hr></hr>
    </div>
  )
}

export default Invoice