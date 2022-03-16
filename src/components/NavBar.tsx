import React from 'react'
import styled from 'styled-components'

import NavItem from '../components/NavItem'

const NavBar:React.FC = () => {
  return (
    <Wrapper>  
      <NavItem to={'#home'} label={'Home'}/>
      <NavItem to={'#fashion'} label={'Fashion'}/>
      <NavItem to={'#games'} label={'Games'}/>
      <NavItem to={'#plants'} label={'Plants'} />
      <NavItem to={'#interior-design'} label={'Int/Design'}/> 
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items:center;
  width: 100%;
  height: 80px;
  background-color: green;
  padding: 0px;
  margin-top: 0px;
`


export default NavBar