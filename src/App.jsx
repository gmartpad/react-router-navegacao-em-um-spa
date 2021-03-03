import React from 'react'
import './assets/css/base/base.css'
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'


function App() {

  const Router = () => {
    const pathname = window.location.pathname;

    if(pathname === "/sobre"){
      return <Sobre/>
    }else{
      return <Home/>
    }
  }

  return (
  <>
    { Router() }
  </>
  )
}

export default App
