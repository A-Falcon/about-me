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
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  list-style-type: none;
  font-size: ${(props) => props.theme.font.fontSize}px; 
  text-transform: uppercase;
  font-family: ${(props) => props.theme.font.fontFam};
  transform: scale(1,1);
  -webkit-transform: scale(1,1); /* Safari and Chrome */
  -moz-transform: scale(1,1); /* Firefox */
  -ms-transform: scale(1,1); /* IE3+ */
  -o-transform: scale(1, 1); /* Opera */
`


export default NavItem
