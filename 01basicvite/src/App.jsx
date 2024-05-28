import Youtube from "./Youtube"

function App() {

  const username = "BEROZGAAR"

  return (
    <>
      <h1> My name is Aman Maurya {username}  </h1>
      <Youtube />
      <h1> I am the topper of the class {2 + 2}</h1>
    </>
  )
}

// Here in the JSX we have to follow one rule that only one element can return 
// to overcome this we can use tag 

export default App
