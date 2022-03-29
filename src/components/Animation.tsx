import React from 'react'
import styled from 'styled-components'
import {device} from '../data/device'
import {thriftData} from '../data/thriftData'

const Animation: React.FC = () => {

  
  return (
    <Wrapper>
      <List>
        {thriftData.map((elem, i) => (
          <Item key={i}>
            <ElemName>{elem.name}</ElemName>
            <ImgCont style={{}}>
              <Img src={elem.img} alt={elem.name}/>
            </ImgCont>
          </Item>
        ))}
      </List>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  width: 100%;
  height: auto;
  
  /* media ${device.xs} {
    display: none;
  } */
`
const List = styled.ul`
  min-height: auto;
  display: flex;
  flex-direction:column;
  justify-content: space-evenly;
  
  margin: 0px;
  
  position: relative;
  bottom: 90px;
  /* margin: 10px;
  margin-left: -10px; */
 
  `
const Item = styled.li`
  flex-direction: row;
  font-size: ${(props) => props.theme.font.fontSize * 2}px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.font.fontFam};
  transition: 200ms;
  
  &:hover {
    color: ${(props) => props.theme.colors.light};
  }
`
const ElemName = styled.div`
  border-bottom: 1.5px solid black;
  padding: 20px;
  width: 80%;
  
  &:hover {

    & ~ div {
      transform: rotate(5deg) scale(1);
      opacity: 1;
    }
  }
`
const ImgCont = styled.div`
  /* margin-top: -200px; */
  display: flex;
  flex-direction: row;
  margin-right: 100px;
  justify-content:flex-end;
  align-items: center;
  transform:  scale(1);
  transition: 0.2s;
  opacity: 0;
`

const Img = styled.img`
  position: absolute;
  width: 300px;
  border-radius: 10%;
  background-color: ${(props) => props.theme.colors.dark};
  box-shadow: 0 3px 20px rgb(0 0 0 / 0.5);

`
export default Animation
