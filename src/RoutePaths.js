import React from "react"
import { Route, Routes } from "react-router-dom"

import About from "./pages/About/About"
import DashboardPage from "./pages/Dashboard/DashboardPage"
import Error from "./pages/Error/Error"
import Projects from "./pages/Projects/Projects"
import WeatherApp from "./pages/WeatherApp/WeatherApp"
import Animations from "./pages/Animations/Animations"

const RoutePaths = () => {
  return (
    <Routes>
      <Route exact path="/" element={<About/>} />
      <Route path="/dashboard" element={<DashboardPage/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/weather" element={<WeatherApp/>} />
      <Route path="/animations" element={<Animations/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
  )
}

export default RoutePaths