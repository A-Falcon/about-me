import React from 'react'
import styled from 'styled-components'

import NavBar from '../../components/NavBar'

const Home:React.FC = () => {
  return (
    <Wrapper>
      <NavBar />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`
export default Home