import React from 'react'
import styled from 'styled-components'

import { device } from '../../data/device'

import Heading from '../../components/Heading'
import TravelAutoSlider from '../../components/TravelAutoSlider'


const Travel: React.FC = () => {
  return (
    <Wrapper>
      <Heading id='travel' label={'TRAVEL'}/>
      <Content>
        <TextBox>
          <Desc>
           When given the oppertunity, I love to travel. Here are some of the photos of my most recent trip to Japan.
          </Desc>
          <Desc>
            Looking Forward to many more adventures!
          </Desc>
        </TextBox>
        <TravelAutoSlider />
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
    padding-bottom: 80px; 
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
  padding: 50px;
  margin-top: -200px;

  @media ${device.xs} {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0px;
    margin: 20px;
    margin-bottom: 0px;
  }
  @media ${device.sm} {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top:0px;
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
    margin: 50px;
    margin-bottom: 0px;
  }
  @media ${device.sm} {
    margin-bottom: 50px;
  }
`
const Desc = styled.p`
  line-height: 2;
  font-size: ${(props) => props.theme.font.fontSize}px;
  font-family: ${(props) => props.theme.font.fontFam};
  font-weight: ${(props) => props.theme.font.fontWeight};
  color: ${(props) => props.theme.colors.text};
  padding: 5px;
  @media ${device.xs} {
    font-size: ${(props) => props.theme.font.fontSize}px;
  }
`
  
export default Travel