import React, { useState } from 'react'

export default function Watchlist({wishList,handleRemoveWish}) {

    const [seacrh,setSrch] = useState('')


  return (
        <>

        <div className='justify-center flex flex-wrap m-4 gap-4'>
            <div className='flex items-center justify-center w-[9rem] h-[3rem] bg-blue-400 rounded-xl text-white font-bold'>
                Action
            </div>
            <div className='flex items-center justify-center w-[9rem] h-[3rem] bg-blue-400 rounded-xl text-white font-bold'>
                Popular
            </div>
        </div>


            <div className=' flex justify-center my-4 gap-5'>
                <input className='w-[18rem] h-[3rem] rounded-xl border bg-gray-100 text-center' placeholder='Search Anime' type='text' value={seacrh} onChange={(e) => setSrch(e.target.value)}></input>
                <button className='w-[5rem] border rounded-xl bg-green-300'>Search</button>
            </div>

            <div className='border border-gray-400 p-4 m-4 rounded-lg mt-10'>
                <table className='w-full text-center border'>
                    <thead className=''>
                        <tr className=''>
                            <th>Name</th>
                            <th>Rating</th>
                            <th>Fans</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {wishList.map((obj) => {
                            return  <tr className='border-b-2'>
                            <td className='flex items-center py-4'>
                                <img className='w-[4rem] h-[5rem]'
                                src={obj.images.jpg.large_image_url}></img>
                                <div className='mx-5'>{obj.title}</div>
                            </td>
                            <td>{obj.score}</td>
                            <td>
                                {obj.members}
                            </td>
                            <td>{obj.rating}</td>
                            <td>
                                <button onClick={() => handleRemoveWish(obj)}><i class="fa-solid fa-trash"></i></button>
                            </td>
            
                        </tr>
                        })}

                       

                    </tbody>
                </table>
            </div>



        </>
    
  )
}
