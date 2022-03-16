import React from 'react'
import styled from 'styled-components'

import Card from '../../components/Card'

const PortraitView: React.FC = () => {
  return (
    <Wrapper>
      <Card />
    </Wrapper>
  )
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: transparent;
  margin-top: 30vh;
  margin-bottom: -200px;
`

export default PortraitView
