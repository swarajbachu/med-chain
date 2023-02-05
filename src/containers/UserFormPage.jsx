import React from 'react'
import { UserForm } from '../componenets'

const UserFormPage = () => {
  return (
    <div className='p-16 flex flex-col justify-center'>
        <h1 className='text-4xl font-bold pl-6 mb-10'>
            Uses Details
        </h1>
      <UserForm/>
    </div>
  )
}

export default UserFormPage
