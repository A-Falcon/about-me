import React from 'react'
import styled from 'styled-components'
import {device} from '../../data/device'

import Heading from '../../components/Heading'

const About: React.FC = () => {
  return (
    <Wrapper>
      <Heading id='about'label={''}/>
      <HeroText>AHTZIRI</HeroText>
      <Content>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      </Content>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.light};
  height: 100vh;
  width: 100%;
`

const HeroText = styled.h1`
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  font-size: ${(props) => props.theme.font.fontSize * 10}px; 
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

const Content = styled.div` 
  margin: 50px;
  display: flex;
  flex-direction: row;
`
const Text = styled.p`
  padding: 10px;
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.font.fontSize}px;
  font-family: ${(props) => props.theme.font.fontFam};
`
// const Carasoul = styled.div`

// `

export default About
