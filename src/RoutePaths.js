import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Layout from "./components/Layout/index"
import Home from "./components/Home/index"
import About from "./components/About/index"
import Contact from "./components/Contact/index"

const RoutePaths = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Home/>}/>
        <Route path="/about" component={() => <About/>}/>
        <Route path="/contact" component={() => <Contact/>}/>
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Switch>
  </Router>
  )
}

export default RoutePaths