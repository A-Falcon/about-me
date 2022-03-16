import React from 'react'
import styled from 'styled-components'

import Heading from '../../components/Heading'

const Games: React.FC = () => {
  return (
      <Wrapper>
         <Heading id='games' label={'GAMES'}/>
      </Wrapper>
  )
}


const Wrapper = styled.div`
  background-color: blue;
  height: 100vh;
  width: 100%;

`

export default Games
