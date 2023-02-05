import React from 'react'

const MedicalCard = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-lg mt-10 mr-10">
    <div className="card-body text-left">
      <h2 className="card-title">Date: </h2>
      <p >Desease Diagonized : </p>
      <p>Description:  </p>
      <p>Hospital: </p>
      <p>BMR: </p>
      <p>ECG: </p>
      <p>PG: </p>
      <button className="btn btn-primary text-sm capitalize font-semibold">Click here to see attachment</button>
    
    </div>
  </div>
  )
}

export default MedicalCard