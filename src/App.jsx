import React from 'react'
import './assets/css/base/base.css'

import { BrowserRouter, Route } from 'react-router-dom';

import Home from './paginas/Home'
import Sobre from './paginas/Sobre'


function App() {

  return (
  <>
    <BrowserRouter>
      <Route exact path="/">
        <Home/>
      </Route> 
      <Route path="/sobre">
        <Sobre/>
      </Route>
    </BrowserRouter>
  </>
  )
}

export default App
