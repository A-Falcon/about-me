import React from 'react'
import styled from 'styled-components'
import { device } from '../data/device'
 
interface HeadingProps  {
  label: string
  id: string
  style?: any
}

const Heading: React.FC<HeadingProps>= ({label, id}) => {
  return (
    <Wrapper id={id}>
      <Text>{label}</Text>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  padding: 50px;
  padding-bottom: 0px;
  @media ${device.xs} {
    display: flex;
    justify-content: center;
    align-items: center;
  
  }
`

const Text = styled.p`
  margin-top:10px;
  font-size: ${(props) => props.theme.font.fontSize * 4}px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.font.fontFamBold};
  font-weight: ${(props) => props.theme.font.fontWeight * 2};
  @media ${device.xs} {
    font-size: ${(props) => props.theme.font.fontSize * 2}px;
    margin-top: 50px;
  }



`
export default Heading
