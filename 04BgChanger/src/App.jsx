import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  function changeColor(color) {
    setColor(color)

  }

  // here we will be using flexbox 

  return (

    <div className='w-full h-screen duration-200  ' style={{ backgroundColor: color }} >

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

          <button
            onClick={() => changeColor('red')} style={{ backgroundColor: 'red' }}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>
            RED
          </button>

          <button
            onClick={() => changeColor('green')} style={{ backgroundColor: 'green' }}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>
            GREEN
          </button>

        </div>

      </div>

    </div>

  )
}

export default App


/*<>

<h1 className='text-3xl bg-green-500'> A Bg Changer app with Vite </h1>

</> */

// In this project for updating the things we are taking the help of state ..  because we cannot directly update the things..// 