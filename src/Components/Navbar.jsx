import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-2 bg-zinc-700'>
      <img src='https://cdn.discordapp.com/attachments/1414469134774829107/1414469365402828800/luffy.png?ex=68bfaec0&is=68be5d40&hm=ebf120308c2df6a1047db5c352797f98d9385038402c885806e7fdd5853861e6&'
      className='w-[50px] rounded-full' alt='pfp'></img>

      <Link to='/' className='text-[white] text-xl font-bold'>Home</Link>
      <Link to='/watchlist' className='text-[white] text-xl font-bold'>WatchList</Link>
      <Link to='/test' className='text-[white] text-xl font-bold'>Test</Link>
    </div>
  )
}
