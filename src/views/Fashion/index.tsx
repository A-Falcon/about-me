import React from 'react'
import styled from 'styled-components'

import Heading from '../../components/Heading'

const FashionView: React.FC = () => {
  return (
    <Wrapper>
      <Heading label={'FASHION'} id='fashion'/>
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

export default FashionView
