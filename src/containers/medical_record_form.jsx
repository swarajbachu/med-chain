import React from 'react'
import { MedicalRecords } from '../componenets'

const MedicalRecordFromPage = () => {
  return (
    <div className='p-16 flex flex-col justify-center'>
        <h1 className='text-4xl font-bold pl-6 mb-10'>
            Medical Record Form
        </h1>
      <MedicalRecords/>
    </div>
  )
}

export default MedicalRecordFromPage
