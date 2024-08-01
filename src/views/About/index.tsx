import React from 'react'
import styled from 'styled-components'

import {device} from '../../data/device'



const About: React.FC = () => {
  return (
    <Wrapper>
      <HomeLink id='about'></HomeLink>
      <HeroText>AHTZIRI</HeroText>
      <Content>
        <Desc>
          Ahtziri Falcon is a self-taught Software Developer with a passion for learning and problem solving. While she has many hobbies and interests, 
          her career focus is software developement. She is currently working on a project to showcase her talents and to broaden her horizons.
          Being a person who loves 'doing', she is always looking for new challenges and ways to improve her skills.
        </Desc>
        <Desc>
          Outside of software developement, Ahtziri is a multi-hat wearer that loves to explore different hobbies and build different skills.
          More often than not, you can usually find her finding a new past time to add to her collection.
          It doesn't matter if it's a hobby or a career, Ahtziri is always looking forward to learn and grow.
        </Desc>
      </Content>
    </Wrapper>
  )
}

const HomeLink = styled.div`
  width: 100%;
  height: .5vh;
`

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  height: auto;
  width: 100%;


@media ${device.xs} {
  padding-bottom: 8vh;
}
`

const HeroText = styled.h1`
  color: ${(props) => props.theme.colors.blood};
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

  @media ${device.sm} {
    font-size: ${(props) => props.theme.font.fontSize * 3.5}px;
  }

`

const Content = styled.div` 
  display: flex;
  flex-direction: row;
  margin: 50px;

  @media ${device.xs} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const Desc = styled.p`
  line-height: 2;
  font-size: ${(props) => props.theme.font.fontSize}px;
  font-family: ${(props) => props.theme.font.fontFamBold};
  font-weight: ${(props) => props.theme.font.fontWeight};
  color: ${(props) => props.theme.colors.text};
  padding: 20px;
  @media ${device.xs} {
    font-size: ${(props) => props.theme.font.fontSize}px;
  }
`
// const Carasoul = styled.div`

// `

export default About
