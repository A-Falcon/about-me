import React from 'react'
import styled from 'styled-components'

import { device } from '../../data/device'

import Heading from '../../components/Heading'
import AutoSlider from '../../components/AutoSlider'


const Plants: React.FC = () => {
  return (
    <Wrapper>
      <Heading id='plants' label={'PLANTS'}/>
      <Content>
        <TextBox>
          <Desc>
           For me gardening and tending to my plants has always been a nice way to spend my free time. It's my favorite way to start my morning and one of the best ways to decompress from work.
          </Desc>
          <Desc>
            I love Autum/Winter months but definitley look forward to Spring soley for the gardening season.
          </Desc>
        </TextBox>
        <AutoSlider />
      </Content>
      
    </Wrapper>
  )
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.black};

  @media ${device.xs} {
    padding-bottom: 8vh; 
  }

  @media ${device.sm} {
    height: auto;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 50vh;
  width: auto;
  padding: 5vh;
  margin-top: -20vh;

  @media ${device.xs} {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0vh;
    margin: 2vh;
    margin-bottom: 0vh;
  }
  @media ${device.sm} {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top:0vh;
  }
`
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 50%;

  @media ${device.xs} {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 5vh;
    margin-bottom: 0vh;
  }
  @media ${device.sm} {
    margin-bottom: 5vh;
  }
`
const Desc = styled.p`
  line-height: 2;
  font-size: ${(props) => props.theme.font.fontSize}px;
  font-family: ${(props) => props.theme.font.fontFam};
  font-weight: ${(props) => props.theme.font.fontWeight};
  color: ${(props) => props.theme.colors.text};
  padding: .5vh, .5vw;
  @media ${device.xs} {
    font-size: ${(props) => props.theme.font.fontSize}px;
  }
`
  
export default Plants
