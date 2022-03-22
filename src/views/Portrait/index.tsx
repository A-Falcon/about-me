import React from 'react'
import styled from 'styled-components'
import { device } from '../../data/device'

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
  height: 100vh;
  width: auto;
  background-color: transparent;
  margin-top: 45vh;
  margin-bottom: -175px;
  
  @media ${device.xs} {
    height: 40vh;
    margin-top: 17vh;
    margin-bottom: -75px;
  }
`

export default PortraitView
