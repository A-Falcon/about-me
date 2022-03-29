import React from 'react'
import styled from 'styled-components'

import Heading from '../../components/Heading'
import AutoSlider from '../../components/AutoSlider'
import { device } from '../../data/device'

const Plants: React.FC = () => {
  return (
    <Wrapper>
      <Heading id='plants' label={'PLANTS'}/>
      <Content>
        <TextBox>
          <Desc>
            I love to plant and grow plants. I have a passion for plants and love to share my knowledge of how to grow plants.
          </Desc>
          <Desc>
            I love to plant and grow plants. I have a passion for plants and love to share my knowledge of how to grow plants.
          </Desc>
        </TextBox>
        <AutoSlider />
      </Content>
      
    </Wrapper>
  )
}


const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.mid};
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  
  

  @media ${device.xs} {
    height: auto;
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
  padding: 50px;
  
  min-height: 50vh;
  width: auto;
  
  margin-top: -200px;
  @media ${device.xs} {
    justify-content: flex-end;
    margin: 20px;
    padding: 0px;
    margin-bottom: 0px;
    display: flex;
    flex-direction: column;
  }
  @media ${device.sm} {
    display: flex;
    margin-top:0px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    
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
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0px;
    margin: 50px;
  }
  @media ${device.sm} {
    margin-bottom: 50px;
  }

`
const Desc = styled.p`
  padding: 5px;
  font-size: ${(props) => props.theme.font.fontSize}px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.font.fontFam};
  font-weight: ${(props) => props.theme.font.fontWeight};
  @media ${device.xs} {
    font-size: ${(props) => props.theme.font.fontSize}px;
  }
`
  
export default Plants
