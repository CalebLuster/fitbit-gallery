import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}> 
      
        </Route>
      </Routes>
    </div>
  )
}

export default App
