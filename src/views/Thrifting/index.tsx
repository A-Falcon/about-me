import React, {useState} from 'react'
import styled from 'styled-components'

import Heading from '../../components/Heading'
import Card from '../../components/Card'

const ThriftingView: React.FC = () => {
 

  return (
    <Wrapper>
      <Heading label={'THRIFTING'} id='thrifting'/>
      <Content>
        <TextBox>
          <Desc>Shopping second hand has always felt better for me. I get to see prices I love for pieces that feel one of one!</Desc>
          <Desc>Here are some of my favorite finds!</Desc>
          <List>
          <Item>sfgdhfjgku</Item>
          <Item>sfgdhfjgku</Item>
          <Item>sfgdhfjgku</Item>
          </List>
        </TextBox>
        <Card  style={{height: '450px', width: '350px'}}/>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.mid};
  height: 150vh;
  width: 100%;
  padding-top: 200px;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 50px;
  height: 400px;
  width: auto;
`
const TextBox = styled.div`
flex-direction: column;
width: 50%;
`

const Desc = styled.p`
  font-size: ${(props) => props.theme.font.fontSize}px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.font.fontFam}; 
`
const List = styled.ul`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: red;
  `
const Item = styled.li`
  border-color: black;
  border-bottom: 3px;
  width: 50%;
  font-size: ${(props) => props.theme.font.fontSize}px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.font.fontFam};
  transition: 200ms;
  &:hover {
    color: ${(props) => props.theme.colors.dark};
    
  }
`
export default ThriftingView
