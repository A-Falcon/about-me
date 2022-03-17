import React from 'react'
import styled from 'styled-components'

import Heading from '../../components/Heading'

const ThriftingView: React.FC = () => {
  return (
    <Wrapper>
      <Heading label={'THRIFTING'} id='thrifting'/>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.mid};
  height: 150vh;
  width: 100%;
  padding-top: 200px;
  /* margin-top: 100vh; */
`

export default ThriftingView
