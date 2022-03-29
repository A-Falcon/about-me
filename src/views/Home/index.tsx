import React from 'react'
import styled from 'styled-components'

import {device} from '../../data/device'

const HomeView: React.FC = () => {
  return (
    <>
    <HomeLink id='home'></HomeLink>
    <Wrapper>
      <HeroText>AHTZIRI</HeroText>
    </Wrapper>
    </>
  )
}

const HomeLink = styled.div`
  width: 100%;
  height: 1px;
`

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  margin-top: 1vh;
  background-color: ${(props) => props.theme.colors.light};
  position:fixed;
  top:0;
  left:0;
   /* prevents your fixed panel from being on top of your subsequent panels */
  z-index: -1; 

  @media ${device.xs} {
    margin-top: 50px;
    padding-bottom: 80px;
  }

  @media ${device.sm} {
  
  }
`

const HeroText = styled.h1`
  color: ${(props) => props.theme.colors.text};
  
  text-align: center;
  font-size: ${(props) => props.theme.font.fontSize * 15}px; 
  text-transform: uppercase;
  font-family: ${(props) => props.theme.font.fontFam};
  transform: scale(1,3);
  -webkit-transform: scale(1,3); /* Safari and Chrome */
  -moz-transform: scale(1,3); /* Firefox */
  -ms-transform: scale(1,3); /* IE3+ */
  -o-transform: scale(1, 3); /* Opera */

  @media ${device.xs} {
    font-size: ${(props) => props.theme.font.fontSize * 2.5}px; 
  }

 

`

export default HomeView
