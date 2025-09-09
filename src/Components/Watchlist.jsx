import React, { useState } from 'react'

export default function Watchlist() {

    const [seacrh,setSrch] = useState('')

    const deleteList = () => {

    }

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
                        <tr className='border-b-2'>
                            <td className='flex items-center py-4'>
                                <img className='w-[4rem] h-[5rem]'
                                src='https://imgc.allpostersimages.com/img/posters/one-piece-monkey-d-luffy-wanted-poster_u-l-faf9200.jpg?artHeight=550&artPerspective=y&artWidth=550&background=ffffff'></img>
                                <div className='mx-5'>One Piece</div>
                            </td>
                            <td>8.5</td>
                            <td>
                                90000
                            </td>
                            <td>PG9</td>
                            <td>
                                <button onClick={deleteList}><i class="fa-solid fa-trash"></i></button>
                            </td>
            
                        </tr>

                    </tbody>
                </table>
            </div>



        </>
    
  )
}
