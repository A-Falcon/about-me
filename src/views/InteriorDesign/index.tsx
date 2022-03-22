import React from 'react'
import styled from 'styled-components'

import Heading from '../../components/Heading'

const InteriorDesign: React.FC = () => {
  return (
    <Wrapper>
      <Heading id='interior-design'label={'INTERIOR-DESIGN'}/>
      <Content>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        {/* <Carasoul></Carasoul> */}
      </Content>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.mid};
  height: 100vh;
  width: 100%;
`
const Content = styled.div`
margin: 50px;
`
const Text = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.font.fontSize}px;
  font-family: ${(props) => props.theme.font.fontFam};
`
// const Carasoul = styled.div`

// `

export default InteriorDesign
