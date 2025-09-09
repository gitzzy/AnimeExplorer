import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-2 bg-zinc-700'>
      <img src='https://avatarfiles.alphacoders.com/375/thumb-1920-375473.jpeg'
      className='w-[50px] rounded-full' alt='pfp'></img>

      <Link to='/' className='text-[white] text-xl font-bold'>Home</Link>
      <Link to='/watchlist' className='text-[white] text-xl font-bold'>WatchList</Link>
      <Link to='/test' className='text-[white] text-xl font-bold'>Test</Link>
      <Link to='/light' className='text-[white] text-xl font-bold'>Click here light</Link>
    </div>
  )
}
