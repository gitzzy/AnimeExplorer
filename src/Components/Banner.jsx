import React from 'react'

export default function Banner() {
  return (
    <div className='h-[40vh] md:h-[70vh] bg-cover bg-center flex items-end' style={{backgroundImage : `url(https://staticg.sportskeeda.com/editor/2025/07/56fb4-17537146243410-1920.jpg?w=640)`, backgroundRepeat:'no-repeat'}}>
      <div className='text-[white] text-xl text-extrabold bg-gray-900/60 text-center w-full' >Demon Slayer : Infinity castle</div>
    </div>
  )
}
