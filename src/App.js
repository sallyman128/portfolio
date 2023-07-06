import React from 'react';
import { BrowserRouter } from "react-router-dom"

import RoutePaths from './RoutePaths';
import Sidebar from "./components/Sidebar/Sidebar"

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <RoutePaths />
      </Sidebar>
    </BrowserRouter>
  );

}

export default App;
