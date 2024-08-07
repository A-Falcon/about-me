import React from 'react'
import styled from 'styled-components'

import { device } from '../../data/device'
import Card from '../../components/Card'

const PortraitView: React.FC = () => {
  return (
    <Wrapper>
      <Card img={require('../../assets/Cars/car.png')} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* width: auto; */
  background-color: transparent;
  margin-top: 20vh;
  margin-bottom: -2.2vh;
  
  @media ${device.xs} {
    height: 40vh;
    margin-top: 25vh;
    margin-bottom: -10vh;
    padding-bottom: 8vh;
  }

`

export default PortraitView
