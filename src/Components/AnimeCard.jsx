import React from 'react'

export default function AnimeCard({ poster, title, rating, rank, fans ,handleWatch,animeObj}) {
  return (
    <div
      style={{ backgroundImage: `url(${poster})` }}
      className="h-[50vh] w-[220px] bg-center bg-cover rounded-xl hover:scale-110 duration-500 hover:cursor-pointer text-center relative"
    >
         <div
        className="absolute top-2 right-2 bg-gray-900/60 text-xl px-3 py-1 rounded-lg"
        onClick={() => handleWatch(animeObj)}
      >
        ❤️
      </div>
      <div className="absolute bottom-0 w-full bg-gray-500/70 text-white p-2 rounded-b-xl text-sm">
        <h2 className="font-bold text-base">{title}</h2>
        <div className='text-left'>
            <p>⭐ Rating :  {rating || "N/A"}</p>
            <p>🏆 Rank   :  {rank || "N/A"}</p>
            <p>👥 Fans   :  {fans?.toLocaleString()}</p>
        </div>
      </div>
    </div>
  )
}
