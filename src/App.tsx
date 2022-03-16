import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components'
import './App.css';

import NavBar from './components/NavBar';
import Home from '../src/views/Home'
import Fashion from '../src/views/Fashion'
import Games from '../src/views/Games'
import Plants from '../src/views/Plants'
import InteriorDesign from '../src/views/InteriorDesign'

function App() {
  
  return (
    <BrowserRouter>
      <Wrapper className="App">
        <NavBar />
        <Home />
        <Fashion />
        <Games />
        <Plants />
        <InteriorDesign />
      </Wrapper>
    </BrowserRouter>
  );
}

const Wrapper = styled.div`
  background-color: blue;
  width: 100%;
  height: 100%;
`

export default App;
