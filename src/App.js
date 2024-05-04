import React from 'react';
import { BrowserRouter } from "react-router-dom"

import RoutePaths from './RoutePaths';
// import Sidebar from "./components/Sidebar/Sidebar"
import NavBarContainer from './components/NavBarContainer';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <NavBarContainer />
      <RoutePaths />
    </BrowserRouter>
  );

}

export default App;
