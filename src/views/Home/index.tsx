import React from 'react'
import styled from 'styled-components'

const HomeView: React.FC = () => {
  return (
    <Wrapper id='home'>
      <HeroText>AHTZIRI</HeroText>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding-top: 40px;
  background-color:red;
  position:fixed;
  top:0;
  left:0;
   /* prevents your fixed panel from being on top of your subsequent panels */
  z-index: -1; 
`

const HeroText = styled.h1`
  text-align: center;
  font-size: 175px;
  text-transform: uppercase;
  font-family: 'Chango', cursive;
  transform: scale(1,3);
  -webkit-transform: scale(1,3); /* Safari and Chrome */
  -moz-transform: scale(1,3); /* Firefox */
  -ms-transform: scale(1,3); /* IE3+ */
  -o-transform: scale(1, 3); /* Opera */
`

export default HomeView
