import React from 'react'

const MedicalCard = ({Desease,Description,hospital}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-lg mt-10 mr-10">
    <div className="card-body text-left">
      <h2 className="card-title">Record </h2>
      <p >Desease Diagonized : {Desease}  </p>
      <p>Description: {Description}  </p>
      <p>Hospital: {hospital} </p>

      <button className="btn btn-primary text-sm capitalize font-semibold">Click here to see attachment</button>
    
    </div>
  </div>
  )
}

export default MedicalCard