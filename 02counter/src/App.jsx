import { useState } from 'react'

import './App.css'

function App() {

  // let counter = 15;

  const [counter, setCounter] = useState(15) // it is also called hook and it returns the value in the form of an Array
  // counter is the variable and setCounter is the function


  const addValue = () => {       // it is a method 

    // counter = counter + 1
    //console.log(counter);

    setCounter((prevCounter) => prevCounter + 1)  // here we are referencing counter to setCounter
    setCounter((prevCounter) => prevCounter + 1)   // it is written callback
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)

    // here it is batched but it counts as a 1 .Nothing will be updated in react 
    // so to avoid this CALLBACK come into this action 

  }

  const removeValue = () => {

    setCounter(counter - 1)     // 

  }


  return (
    <>
      <h1>React Course With Aman Maurya {counter}  </h1>
      <h1>Counter Value : {counter}</h1>
      <button
        onClick={addValue}>
        Add Value</button>{" "}
      <button
        onClick={removeValue}>
        Remove Value</button>
      <p>Footer : {counter}</p>
    </>
  )
}


// here in h1 first we have used the variable injection 
// now i want that when i click on add value it should update the value 
// now we have updated the value but it is not actually updated so now REACT comes into the role ... so to actually update the counter we use STATE 


export default App
