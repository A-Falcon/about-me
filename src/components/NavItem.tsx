import React from 'react'
import styled from 'styled-components'

interface NavItemProps {
  label: string
}

const NavItem: React.FC<NavItemProps> = ({label}) => {
  return (
    <Wrapper>
      <Item>{label}</Item>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  flex: 1;
`
const Item = styled.h1`
  text-align: center;
  list-style-type: none;
  font-size: 30px;  
  font-family: monospace;
`


export default NavItem
