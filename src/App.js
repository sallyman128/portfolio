import React from 'react';
import { BrowserRouter } from "react-router-dom"

import RoutePaths from './RoutePaths';
import NavBarContainer from './components/NavBarContainer';
import './App.css';
import Wrapper from './components/Wrapper';

const App = () => {
  return (
    <Wrapper>
      <NavBarContainer />
      <BrowserRouter>
        <RoutePaths />
      </BrowserRouter>
    </Wrapper>
  );

}

export default App;
