import React from "react"
import { Route, Routes } from "react-router-dom"

import Home from "./components/Home/Home"
import About from "./components/About/About"
import Dashboard from "./components/Dashboard/Dashboard"
import Error from "./components/Error/Error"

const RoutePaths = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
  )
}

export default RoutePaths