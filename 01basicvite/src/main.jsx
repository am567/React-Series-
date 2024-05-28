import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
  type: 'a',               // what type of 
  props: {             // what properties it should have the element

    href: "https://google.com",
    target: '_blank'

  },
  children: 'click me to visit google'

} // here it can be run because this react is written by me so react does not understand my language .
// Instead of this i have to understand the react language......




function Myapp() {
  return (
    <h1>Custom react app</h1>
  )
}

const AnotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>     // dont know what is this 
)


// so how to create element using react 

const areactElement = React.createElement(     // whatever we are writing it's now an object 

  'a',
  { href: 'https://google.com', target: '_blank' },
  'click to visit google'

)


ReactDOM.createRoot(document.getElementById('root')).render(

  // AnotherElement     // This is the beauty of react

  // areactElement
  <App />

)
