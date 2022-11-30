import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/Navbar'
import Body from './components/Body'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Body></Body>
    </>
  )
}

export default App
