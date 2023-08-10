import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import AboutCountry from "./components/AboutCountry"
import Home from "./components/Home"

const  App = () => {

  const [tld, setTld] = useState("about")

  const changeRoute = () => {
    setTld()
  }

  return (    
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path={`/about`} element={<AboutCountry />}></Route>
    </Routes>
  )
}

export default App
