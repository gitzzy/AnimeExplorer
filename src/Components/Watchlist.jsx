import React, { useState } from 'react'

export default function Watchlist({wishList,handleRemoveWish , setWishList}) {

    const [seacrh,setSrch] = useState('')
    const [sort,setSort] = useState(true)
    const [mbr ,setMbr ] = useState(true)

    let sortInc = () => {
       let inc =  wishList.sort((animeA , animeB) => {
            return animeA.score - animeB.score
        })
        setWishList([...inc])
        setSort(false)
    }

    let memInc = () => {
        let mi = wishList.sort((animeA,animeB) => {
            return animeA.members - animeB.members
        })
        setWishList([...mi])
        setMbr(false)
    }

    let memDec = () => {
        let md = wishList.sort((animeA,animeB) => {
            return animeB.members - animeA.members
        })
        setWishList([...md])
        setMbr(true)
    }


    let sortDec = () => {
      let dec =  wishList.sort((animeA , animeB) => {
            return animeB.score - animeA.score
        })
        setWishList([...dec])
        setSort(true)
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

            <div className='border border-gray-400 p-4 m-6 rounded-lg mt-10'>
                <table className='w-full text-center p-4'>
                    <thead className=''>
                        <tr className=''>
                            <th>Name</th>
                            <th className='flex gap-2 p-2 m-2 justify-center'>
                                
                                <div >Rating</div>
                                {sort? <div onClick={sortInc}>↑</div> : <div onClick={sortDec}>↓</div>}
                        
                            </th>
                            
                            <th><div className='flex justify-center gap-2'>
                                
                                <div >Fans</div>
                                {mbr? <div onClick={memInc}>↑</div> : <div onClick={memDec}>↓</div>}
                        
                            </div></th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {wishList.filter((srchObj) => {
                            return srchObj.title.toLowerCase().includes(seacrh.toLowerCase())
                        }).map((obj) => {
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
                                <button onClick={() => handleRemoveWish(obj)}>🗑️</button>
                            </td>
            
                        </tr>
                        })}

                       

                    </tbody>
                </table>
            </div>



        </>
    
  )
}
