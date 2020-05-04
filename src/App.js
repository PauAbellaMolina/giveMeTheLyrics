import React, { useState, useEffect } from 'react'
import HeaderDesktop from './components/HeaderDesktop'
import MainDesktop from './components/MainDesktop'

function App() {
  const [title, setTitle] = useState("GIVEMETHELYRICS")
  return (
    <div>
      <HeaderDesktop title={title} />
      <MainDesktop />
    </div>
  )
}

export default App
