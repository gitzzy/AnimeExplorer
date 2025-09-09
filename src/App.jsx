import './App.css'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Watchlist from './Components/Watchlist'
import Animes from './Components/Animes'
import Light from './Components/Light'
import { useEffect, useState } from 'react'

function App() {
  let [watchlist, setWatch] = useState([])


let handleWatch = (animeObj) => {
  setWatch((prev) => {
    const updated = [...prev, animeObj]
    localStorage.setItem('animeApp', JSON.stringify(updated))
    console.log(updated)
    return updated
  })
}


  let handleRemoveWish = (animeObj) => {
    let filterWish = watchlist.filter((anime) => {
      return animeObj.mal_id != anime.mal_id
    })
    setWatch(filterWish)
  }

useEffect(() => {
  let animeFromLocal = localStorage.getItem('animeApp')
  if(!animeFromLocal){
    return
  }
  setWatch(JSON.parse(animeFromLocal))
},[])

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<><Banner/> <Animes handleWatch={handleWatch} handleRemoveWish={handleRemoveWish} watchlist={watchlist}/> </>}/>
          <Route path='/watchlist' element={<Watchlist wishList={watchlist} handleRemoveWish={handleRemoveWish}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
