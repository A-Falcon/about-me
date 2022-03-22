import React from 'react'
import styled from 'styled-components'

import NavItem from '../components/NavItem'
import {device} from '../data/device'
const NavBar:React.FC = () => {
  return (
    <Wrapper>  
      <NavItem to={'#home'} label={'Home'}/>
      <NavItem to={'#thrifting'} label={'Thrifting'}/>
      <NavItem to={'#games'} label={'Games'}/>
      <NavItem to={'#plants'} label={'Plants'} />
      <NavItem to={'#interior-design'} label={'Int/Design'}/> 
      <NavItem  to={'#hiking'} label={'Hiking'} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  align-items:center;
  width: 100%;
  min-height: 50px;
  background-color: ${(props) => props.theme.colors.light};
  flex-wrap: wrap;
  z-index: 1;

`


export default NavBar