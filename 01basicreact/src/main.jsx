import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
// import App from './App.jsx'

// 1. React component
/*
function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}
*/

// 2. React element using object structure
/*
const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target:'_blank',
    children: 'click me to visit google'
  }
}
*/

// 3. React element using JSX
/*
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)
*/

// 4.

const anotherElement = "chai aur react"

// 5. React element using React.createElement()

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to visit google',
    anotherElement
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {reactElement}

  </StrictMode>,
)
