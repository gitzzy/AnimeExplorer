import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Pagination({handleNext,handlePrev,curPage}) {
    
  return (
    <div className='bg-gray-400 p-4 mt-10 flex justify-center gap-10'>
      <div onClick={handlePrev} className='hover:cursor-pointer hover: scale-110 duration-500' >⬅️</div>
      <p>{curPage}</p>
      <div onClick={handleNext} className='hover:cursor-pointer hover: scale-110 duration-500'>➡️</div>
    </div>
  )
}
