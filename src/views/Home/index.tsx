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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  margin-top: 1vh;
  background-color: ${(props) => props.theme.colors.black};
  position:fixed;
  top:0;
  left:0;
   /* prevents your fixed panel from being on top of your subsequent panels */
  z-index: -1; 

  @media ${device.xs} {
    margin-top: -20vh;
    padding-bottom: 8vh;
  }
`

const HeroText = styled.h1`
  color: ${(props) => props.theme.colors.blood};
  text-align: center;
  font-size: ${(props) => props.theme.font.fontSize}rem; 
  text-transform: uppercase;
  font-family: ${(props) => props.theme.font.fontFam};
  transform: scale(1,3);
  -webkit-transform: scale(1,3); /* Safari and Chrome */
  -moz-transform: scale(1,3); /* Firefox */
  -ms-transform: scale(1,3); /* IE3+ */
  -o-transform: scale(1, 3); /* Opera */

  @media ${device.xs} {
    font-size: ${(props) => props.theme.font.fontSize * 4}px; 
  }

  @media ${device.sm} {
    font-size: ${(props) => props.theme.font.fontSize * 8}px
  }
`

export default HomeView
