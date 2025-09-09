import React from 'react'

export default function Banner() {
  return (
    <div className='h-[40vh] md:h-[70vh] bg-cover bg-center flex items-end' style={{backgroundImage : `url(https://i.pinimg.com/originals/f3/c0/f6/f3c0f6fd9432250fdf7547ac691cc02d.gif)`, backgroundRepeat:'no-repeat'}}>
      <div className='text-[white] text-xl text-extrabold bg-gray-900/60 text-center w-full' >The Pirate King : Monkey D. Luffy</div>
    </div>
  )
}
