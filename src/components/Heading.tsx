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
  
  @media ${device.xs} {
    display: flex;
    justify-content: center;
    align-items: center;
    padding:10px;
  }
`

const Text = styled.p`
  font-size: ${(props) => props.theme.font.fontSize * 4}px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.font.fontFamBold};
  font-weight: ${(props) => props.theme.font.fontWeight * 2};
  @media ${device.xs} {
    font-size: ${(props) => props.theme.font.fontSize * 2}px;
    padding: 10px;
    margin:50px;
    
  }
  @media ${device.sm} {
    margin-bottom: -10px;
  }



`
export default Heading
