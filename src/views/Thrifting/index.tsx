import React, {useState} from 'react'
import styled from 'styled-components'

import Heading from '../../components/Heading'
import Card from '../../components/Card'
import { device } from '../../data/device'
import Animation from '../../components/Animation'

const ThriftingView: React.FC = () => {
 

  return (
    <Wrapper>
      <Heading label={'THRIFTING'} id='thrifting'/>
      <Content>
          <Animation />
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
  flex-direction: column;
  width: 50%;
  background-color:blue;
  @media ${device.xs} {
    width: 100%;
  }
`

const Desc = styled.p`
  font-size: ${(props) => props.theme.font.fontSize}px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.font.fontFam}; 
  @media ${device.xs} {
    font-size: ${(props) => props.theme.font.fontSize * .8}px;
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
