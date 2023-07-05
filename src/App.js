import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Routes from './Routes';
import Sidebar from "./components/Sidebar/Sidebar"

import './App.css';

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Routes />
    </Router>
  );

}

export default App;
