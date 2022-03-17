import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import styled, {ThemeProvider} from 'styled-components'
import './App.css';

import NavBar from './components/NavBar';
import Home from '../src/views/Home'
import Portrait from '../src/views/Portrait'
import Thrifting from './views/Thrifting'
import Games from '../src/views/Games'
import Plants from '../src/views/Plants'
import InteriorDesign from '../src/views/InteriorDesign'
import Hiking from '../src/views/Hiking'
import theme from './theme';



function App() {
  
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Wrapper className="App">
        <NavBar />
        <Home />
        <Portrait />
        <Thrifting />
        <Games />
        <Plants />
        <InteriorDesign />
        <Hiking />
      </Wrapper>
    </BrowserRouter>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
`

export default App;
