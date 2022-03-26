import React from 'react'
import styled from 'styled-components'
import {HashLink as Link} from 'react-router-hash-link'
import { device } from '../data/device'

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
  padding-left: 17px;
  padding-right: 17px;
`
const Item = styled.h1`
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  list-style-type: none;
  font-size: ${(props) => props.theme.font.fontSize}px; 
  text-transform: uppercase;
  font-family: ${(props) => props.theme.font.fontFamBold};
  font-weight: ${(props) => props.theme.font.fontWeight * 2};
  transform: scale(1,1);
  -webkit-transform: scale(1,1); /* Safari and Chrome */
  -moz-transform: scale(1,1); /* Firefox */
  -ms-transform: scale(1,1); /* IE3+ */
  -o-transform: scale(1, 1); /* Opera */
  @media ${device.xs} { 
    font-size: ${(props) => props.theme.font.fontSize  * .6}px; 
    
  }
`


export default NavItem
