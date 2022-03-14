import React from 'react'
import styled from 'styled-components'

const NavBar:React.FC = () => {
  return (
    <Wrapper>
      <Nav>
        <NavItem>Plants</NavItem>
        <NavItem>Fashion</NavItem>
        <NavItem>Games</NavItem>
        <NavItem>Interior Design</NavItem>
      </Nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
flex-direction: row;
justify-content: space-around;
width: 100%;
background-color: blue;
`
const NavItem = styled.li`
font-size: 40px;
`
const Nav = styled.ul`

`

export default NavBar