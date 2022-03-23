import React, { useState, useEffect , useContext, createContext } from 'react';
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

// ##########
// ##########
// ##########

type ScreenSizeType = 'xs' | 'sm' | 'lg'

export const SizeContext = createContext<ScreenSizeType>('lg')

function useWindowDimensions() {

  const hasWindow = typeof window !== 'undefined';

  function getWindowDimensions() {
    const screenWidth = hasWindow ? window.innerWidth : null;
    const screenHeight = hasWindow ? window.innerHeight : null;
    return {
      screenWidth,
      screenHeight,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  function handleResize() {
    setWindowDimensions(getWindowDimensions());
  }
  useEffect(() => {
    if (hasWindow) {

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}

function getTypeForSize(size: number): ScreenSizeType {
  if (size <= 420) return 'xs'
  if (size <= 768) return 'sm'
  return 'lg'
}

// ##########
// ##########
// ##########


function App() {
  const screenType = getTypeForSize(useWindowDimensions().screenWidth || 0)
  
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <SizeContext.Provider value={screenType}>
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
      </SizeContext.Provider>
    </BrowserRouter>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
`

export default App;
