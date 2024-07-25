import React, { useContext } from 'react'
import styled from 'styled-components'

import { SizeContext } from '../../App'
import { device } from '../../data/device'

import Heading from '../../components/Heading'
import Animation from '../../components/Animation'
import ImgSlider from '../../components/ImgSlider'



const ThriftingView: React.FC = () => {
  const screenType = useContext(SizeContext)
  return (
    <Wrapper>
      <Heading label={'THRIFTING'} id='thrifting'/>
      <Content style={ device.xs ? {flexDirection: 'column'} : {flexDirection: 'row'}}>
        { screenType === 'xs'
        ? <>
         <ImgSlider /> 
          <TextBox>
              <Desc> 
                Above are some of my finds that have been my gateway to sustainable fashion. 
              </Desc>
              <Desc>
                Shopping second-hand is a great way to repurpose and reduce waste in the landfill.
              </Desc>
          </TextBox>
         
          </>
        : 
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <Animation />
          <TextBox>
              <Desc> 
                Here are some of my finds that have been my gateway to sustainable fashion. 
              </Desc>
              <Desc>
                Shopping second-hand is a great way to repurpose and reduce waste in the landfill.
              </Desc>
          </TextBox>
        </div>
         
        }  
          
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  padding-top: 150px;
  background-color: ${(props) => props.theme.colors.black};
  
  @media ${device.sm} {
    padding-top: 20px;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 50vh;
  width: auto;
  padding: 50px;  

  @media ${device.xs} {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 20px;
    margin-bottom: 0px;
    padding: 0px;
  }
  @media ${device.sm} {
    display: flex;
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
  margin-bottom: 90px;

  @media ${device.xs} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 50px;
    margin-bottom: 0px;
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
export default ThriftingView
