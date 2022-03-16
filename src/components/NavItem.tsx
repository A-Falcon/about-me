import React from 'react'
import styled from 'styled-components'
import {HashLink as Link} from 'react-router-hash-link'

interface NavItemProps {
  label: string
  to: any
}

const NavItem: React.FC<NavItemProps> = ({label, to}) => {
  return (
    <Wrapper>
      <Link to={to} smooth style={{ textDecoration: 'none' }}>
        <Item>{label}</Item>
      </Link>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  flex: 1;
`
const Item = styled.h1`
  color: black;
  text-align: center;
  list-style-type: none;
  font-size: 30px;  
  font-family: monospace;
`


export default NavItem
