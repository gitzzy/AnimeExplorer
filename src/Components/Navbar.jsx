import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="flex border border-black-900 space-x-8 items-center m-0 pl-3 py-2 bg-[url('https://i.pinimg.com/originals/50/52/13/505213e2bc49d233b4950b5c9652011b.gif')] bg-cover bg-center">
      <img 
        src="https://avatarfiles.alphacoders.com/375/thumb-1920-375473.jpeg"
        className="w-[50px] rounded-full" 
        alt="pfp"
      />

      <Link to="/" className="text-white text-xl font-bold">Home</Link>
      <Link to="/watchlist" className="text-white text-xl font-bold">WatchList</Link>
      {/* <Link to="/test" className="text-white text-xl font-bold">Test</Link> */}
    </div>
  )
}
