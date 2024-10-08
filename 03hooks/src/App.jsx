import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import TodoList from './components/TodoList';
import Profile from './components/Profile';
import ShoppingList from './components/ShoppingList';

function App() {
  // const [toggle, setToggle] = useState(false)
  // const [count, setCount] = useState(0)
  // const [data, setData] = useState("")

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/comments")
  //   .then((response) => {
      
  //     // console.log(response.data[0].email)
  //     setData(response.data[0].email)
  //     console.log("triggered")
  //   })
  // }, [])


  return (
    // <div className='flex h-screen'>
    //   <div className='m-auto'>
    //     <h1>{data}</h1>
    //     <h1 className='text-6xl font-bold text-center'>{count}</h1>
    //     {/* {toggle && <h1>Toggle</h1>} */}
    //     <button 
    //     className='bg-slate-700 p-2 rounded-md text-white hover:bg-slate-500'
    //     onClick={() => {
    //       // !setToggle(!toggle);
    //       setCount(count + 1)
    //     }}
    //     >
    //       Click Me
    //     </button>
    //   </div>
    // </div>
    <div>
      <ShoppingList/>
    </div>
  )
}

export default App
