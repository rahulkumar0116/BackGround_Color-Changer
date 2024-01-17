/* eslint-disable no-unused-vars */
import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  const red = ()=>{
    setColor("red")
  }

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center
        gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button className="outline-none px-4 rounded-2xl" 
        onClick={()=>{setColor("red")}} 
        style={{backgroundColor:"Red"}}>Red</button>
        <button className="outline-none px-4 rounded-2xl"
        onClick={()=>{setColor("orange")}}
        style={{backgroundColor:"Orange"}}>Orange</button>
        <button className="outline-none px-4 rounded-2xl"
        onClick={()=>{setColor("Yellow")}}  
        style={{backgroundColor:"Yellow"}}>Yellow</button>
        <button className="outline-none px-4 rounded-2xl"
        onClick={()=>{setColor("Green")}}  
        style={{backgroundColor:"Green"}}>Green</button>
        <button className="outline-none px-4 rounded-2xl"
        onClick={()=>{setColor("Blue")}}   
        style={{backgroundColor:"Blue"}}>Blue</button>
        <button className="outline-none px-4 rounded-2xl"
        onClick={()=>{setColor("Indigo")}}  
        style={{backgroundColor:"Indigo"}}>Indigo</button>
        <button className="outline-none px-4 rounded-2xl"
        onClick={()=>{setColor("Violet")}} 
        style={{backgroundColor:"Violet"}}>Violet</button>
        
        </div>
      </div>
    </div>
  )
}

export default App
