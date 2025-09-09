import './App.css'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import {BrowserRouter, Route, Routes,} from "react-router-dom"
import Watchlist from './Components/Watchlist'
import Animes from './Components/Animes'
import Test from './Components/Test'
import { useState } from 'react'

function App() {

  let [watchlist,setWatch] = useState([])

  let handleWatch = (animeObj) => {
  setWatch((prev) => {
    const updated = [...prev, animeObj]
    console.log(updated)
    return updated
  })
}


  return (
    <>
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element={<><Banner/> <Animes handleWatch={handleWatch}/> </>}/>
        <Route path='/watchlist' element={<Watchlist/>}/>
        <Route path='/test' element={<Test/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
