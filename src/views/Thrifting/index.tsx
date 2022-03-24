import React, { useContext } from 'react'
import styled from 'styled-components'

import Heading from '../../components/Heading'
import Card from '../../components/Card'
import { device } from '../../data/device'
import Animation from '../../components/Animation'
import ImgSlider from '../../components/ImgSlider'
import { SizeContext } from '../../App'


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
        <>
          <Animation />
          <TextBox>
              <Desc> 
                Above are some of my finds that have been my gateway to sustainable fashion. 
              </Desc>
              <Desc>
                Shopping second-hand is a great way to repurpose and reduce waste in the landfill.
              </Desc>
          </TextBox>
        </>
         
        }  
          
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.mid};
  height: 150vh;
  width: 100%;
  padding-top: 150px;
  @media ${device.xs} {
    padding-top: 50px;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  
  justify-content: space-between;
  margin: 50px;
  height: auto;
  width: auto;

  @media ${device.xs} {
    margin: 20px;
    flex-wrap: wrap;
  }
`
const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;
  /* background-color:blue; */
  @media ${device.xs} {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Desc = styled.p`
  padding: 20px;
  font-size: ${(props) => props.theme.font.fontSize * 1.5}px;
  color: ${(props) => props.theme.colors.text};
  font-family: monospace; 
  font-weight: 700;
  @media ${device.xs} {
    font-size: ${(props) => props.theme.font.fontSize}px;
  }
`
// const List = styled.ul`
//   height: auto;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   background-color: red;
//   margin: 10px;
//   margin-left: -10px;
//   @media ${device.xs} {
//     margin-left: -20px;
//   }
//   `
// const Item = styled.li`
//   border-bottom: 2px solid black;
//   /* width: 50%; */
//   padding: 10px;
//   font-size: ${(props) => props.theme.font.fontSize * 2}px;
//   color: ${(props) => props.theme.colors.text};
//   font-family: ${(props) => props.theme.font.fontFam};
//   transition: 200ms;
//   &:hover {
//     color: ${(props) => props.theme.colors.dark};
    
//   }

//   @media ${device.xs} {
//     font-size: ${(props) => props.theme.font.fontSize * .9}px;
//   }
// `
export default ThriftingView
