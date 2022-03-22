import React from 'react'
import styled from 'styled-components'
import { device } from '../data/device'

interface CardProps {
  // img: any
  style?: any

}
const Card: React.FC<CardProps>= ({style}) => {
  return (
    <Wrapper style={style}>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  height:80%;
  width: 60%;
  border-radius: 10%;
  background-color: ${(props) => props.theme.colors.dark};
  box-shadow: 0 3px 20px rgb(0 0 0 / 0.5);
  transition: all .5s ease-in-out; 
  &:hover {
    transform: scale(1.02); 
  }
  @media ${device.xs} {
    /* height:22.5rem;
    width: 20rem; */
  }
`

export default Card
