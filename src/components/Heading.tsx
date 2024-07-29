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
  padding: 5vh;
  
  @media ${device.xs} {
    display: flex;
    justify-content: center;
    align-items: center;
    padding:1vh;
  }

   @media ${device.sm} {
    display: flex;
    justify-content: flex-start;
    padding:6vh;
  }

`

const Text = styled.p`
  font-size: ${(props) => props.theme.font.fontSize * 4}px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.font.fontFamBold};
  font-weight: ${(props) => props.theme.font.fontWeight * 2};
  @media ${device.xs} {
    font-size: ${(props) => props.theme.font.fontSize * 2}px;
    padding: 1vh;
    margin:5vh;
    
  }
  @media ${device.sm} {
    margin-bottom: -1vh;
  }



`
export default Heading
