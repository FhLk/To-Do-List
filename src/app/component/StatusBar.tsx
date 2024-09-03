"use client"
import React, { FC, useEffect, useState } from 'react'

const StatusBar: FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 50); // ปรับค่า 100 ตามความต้องการ
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0, behavior:
        'smooth'
    });
  };
  return (
    <div className='flex justify-around'>
      <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'>TODO</button>
      <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'>DOING</button>
      <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'>DONE</button>
      <div className='fixed bottom-[10%] right-[20px]'>
        {showBackToTop && (
          <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l' onClick={handleBackToTop}> ^ </button>
        )}
      </div>
    </div>
  )
}

export default StatusBar
