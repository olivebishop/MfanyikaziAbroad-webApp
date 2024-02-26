import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <h1 className='bg-red-200 mt-3'>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
   </h1>
  )
}


export default App
