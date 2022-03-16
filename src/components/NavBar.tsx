import React from 'react'
import styled from 'styled-components'

import NavItem from '../components/NavItem'

const NavBar:React.FC = () => {
  return (
    <Wrapper>
      <NavItem label={'Fashion'}/>
      <NavItem label={'Games'}/>
      <NavItem label={'Home'}/>
      <NavItem label={'Interior Design'}/> 
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items:center;
  width: 100%;
  height: 80px;
  background-color: green;
  padding: 0px;
  margin-top: 0px;
`


export default NavBar