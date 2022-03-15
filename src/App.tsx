import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components'
import './App.css';
import Home from '../src/Home'

function App() {
  return (
    <Wrapper className="App">
      <Home />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: blue;
  width: 100%;
  height: 100%;
`

export default App;
