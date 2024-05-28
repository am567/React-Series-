import { useState } from 'react'
import './App.css'
import Card from '.components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-black p-3 rounded-md'>Vite with Tailwind</h1>
      <Card userName="Aman Maurya" />
      <Card userName="LOVE" />
      <Card userName="Sandali Gupta" />
    </>
  )
}

export default App
