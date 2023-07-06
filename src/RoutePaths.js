import React from "react"
import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Dashboard from "./pages/Dashboard/Dashboard"
import Error from "./pages/Error/Error"

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