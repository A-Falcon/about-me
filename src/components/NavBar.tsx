import React from 'react'
import styled from 'styled-components'

import NavItem from '../components/NavItem'

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
  justify-content: center;
  align-items:center;
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.colors.light};
`


export default NavBar