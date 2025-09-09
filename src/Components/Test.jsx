import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Test() {

    //Syntax of useEffect()

    const [count , setCount] = useState(1);
    const [txt , setText] = useState('');
    const [name,setName] = useState([]);
    const page = 2;

    useEffect(()=>{
        console.log('use effect running');
        document.title = `(${count}) new messages`
    },[count])

    useEffect(() => {
        axios.get(`https://api.jikan.moe/v4/anime?page=${count}`).then((res) =>{
            console.log(res.data.data)
            setName(res.data.data)
        })
    },[count])

    function Increment(){
        setCount(count+1);
    }

    function Decrement(){
        setCount(count-1);
    }

    function handleText(){

    }

    
  return (
    <div>
      Content available for testing purpose only
      <br></br>
      <h1>Count : {count}</h1>
      <br></br>
      <h1>{txt}</h1>
      <br></br>
      <input className='border' type='text' onChange={(e) => setText(e.target.value)} value={txt}></input>
      <br></br>
      <button className='bg-gray-500 w-[30px] h-[30px]' onClick={Increment}>+</button>
      <button className='bg-gray-500 w-[30px] h-[30px]' onClick={Decrement}>-</button>

        <br>
        </br>
        <h1>Api Testing</h1>
        {name.map((obj) => {
        return <h2>{obj.title}</h2>
    })}
    </div>
    
  )
}
