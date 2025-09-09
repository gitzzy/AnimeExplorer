import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Pagination({handleNext,handlePrev,curPage}) {
    
  return (
    <div className='bg-[url("https://i.pinimg.com/originals/34/1e/80/341e800b1f29d3e34ea2eba5a6af205c.gif")] p-4 mt-10 flex justify-center gap-10'>
      <div onClick={handlePrev} className='hover:cursor-pointer hover: scale-110 duration-500' >⬅️</div>
      <p className='text-white'>{curPage}</p>
      <div onClick={handleNext} className='hover:cursor-pointer hover: scale-110 duration-500'>➡️</div>
    </div>
  )
}
