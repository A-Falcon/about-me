import React from 'react'
import styled from 'styled-components'

const NavBar:React.FC = () => {
  return (
    <Wrapper>
        <NavItem>Plants</NavItem>
        <NavItem>Fashion</NavItem>
        <NavItem>Games</NavItem>
        <NavItem>Interior Design</NavItem>
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  display:flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items:center;
  width: 100%;
  height: 80px;
  background-color: green;
`
const NavItem = styled.li`
  list-style-type: none;
  font-size: 40px;  
`


export default NavBar