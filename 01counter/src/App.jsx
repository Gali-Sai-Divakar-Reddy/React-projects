import { useState } from "react"

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="flex h-screen bg-slate-800">
      <div className="m-auto">
        <div className="flex flex-col gap-2 justify-around items-center w-96 h-56 bg-slate-600 rounded-md">
          <h1 className="font-sans text-6xl font-semibold text-white text-center">{count}</h1>
          <div className="">
            <button 
            type="button" 
            className="bg-red-900 m-1 p-3 rounded-md shadow-md text-white font-sans font-medium"
            onClick={() => {setCount(count - 1)}}
            >Decrement</button>
            <button 
            type="button" 
            className="bg-slate-500 m-1 p-3 rounded-md shadow-md text-white font-sans font-medium"
            onClick={() => {setCount(0)}}
            >Reset</button>
            <button 
            type="button" 
            className="bg-green-900 m-1 p-3 rounded-md shadow-md text-white font-sans font-medium"
            onClick={() => {setCount(count + 1)}}
            >Increment</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
