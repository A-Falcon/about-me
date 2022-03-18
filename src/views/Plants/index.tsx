import React from 'react'
import styled from 'styled-components'

import Heading from '../../components/Heading'

const Plants: React.FC = () => {
  return (
    <Wrapper>
      <Heading id='plants' label={'PLANTS'}/>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.mid};
  height: 100vh;
  width: 100%;
`

export default Plants
