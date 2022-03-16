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
  font-size: 20px;  
  text-transform: uppercase;
  font-family: 'Chango', cursive;
  transform: scale(1,1);
  -webkit-transform: scale(1,1); /* Safari and Chrome */
  -moz-transform: scale(1,1); /* Firefox */
  -ms-transform: scale(1,1); /* IE3+ */
  -o-transform: scale(1, 1); /* Opera */
`


export default NavItem
