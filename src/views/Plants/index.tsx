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
    
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  

  @media ${device.xs} {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  `
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  padding: 0 2rem;
  margin-bottom: 400px;
  
  @media ${device.xs} {
    width: auto;
    height:auto;
    margin-bottom: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }

  `
const Desc = styled.p`
  padding: 20px;
  font-size: ${(props) => props.theme.font.fontSize * 1.5}px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.font.fontFam};
  font-weight: ${(props) => props.theme.font.fontWeight};
  @media ${device.xs} {
    width: 100%;
    font-size: ${(props) => props.theme.font.fontSize}px;
  }
  `
  
export default Plants
