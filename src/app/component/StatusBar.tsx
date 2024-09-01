import React, { FC } from 'react'

const StatusBar : FC = () =>{
  return (
    <div className='flex justify-around'>
      <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'>TODO</button>
      <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'>DOING</button>
      <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'>DONE</button>
    </div>
  )
}

export default StatusBar
