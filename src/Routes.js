import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Layout from "./components/Layout/Layout"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Error from "./components/Error/Error"

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Home/>}/>
        <Route path="/about" component={() => <About/>}/>
        <Route path="/contact" component={() => <Contact/>}/>
        <Route render={() => <Error />} />
      </Switch>
  </Router>
  )
}

export default Routes