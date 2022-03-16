import React from 'react'
import styled from 'styled-components'

interface HeadingProps  {
  label: string
  id: string
}

const Heading: React.FC<HeadingProps>= ({label, id}) => {
  return (
    <Wrapper id={id}>
      <Text>{label}</Text>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  padding-top: 10px;
  padding-left: 50px;
  
`

const Text = styled.p`
  font-size: ${(props) => props.theme.font.fontSize * 4}px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.font.fontFam};
`
export default Heading
