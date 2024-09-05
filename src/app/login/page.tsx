import React from 'react'
import Login from '@/components/LogingPage/Login'
import ProtectedRoute from '@/components/ProtectedRoute'

const page = () => {
  
  return (
    <div className='flex justify-center items-center h-full'>
        <Login />
    </div>
  )
}

export default page
