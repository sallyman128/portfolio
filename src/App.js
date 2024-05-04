import React from 'react';
import { BrowserRouter } from "react-router-dom"

import RoutePaths from './RoutePaths';
// import Sidebar from "./components/Sidebar/Sidebar"
import NavBar from './components/NavBar';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar>
        <RoutePaths />
      </NavBar>
    </BrowserRouter>
  );

}

export default App;
