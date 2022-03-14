import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components'
import './App.css';
import Home from './views/Home'

function App() {
  return (
    <Wrapper className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Home />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: blue;
  width: 1500px;
  height: 800px;
`

export default App;
