import React from 'react'
import styled from 'styled-components'
import Card from '../../components/Card'
import {device} from '../../data/device'

import Heading from '../../components/Heading'

const HikingView: React.FC = () => {
  return (
    <Wrapper>
      <Heading id='hiking' label={'HIKING'} />
      <Content>
        <Card style={{height: "60%", width: '90%'}}/>
      </Content>
      
    </Wrapper>
  )
}


const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.mid};
  min-height: 100vh;
  width: 100%;
  
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 50px; */

  @media ${device.xs} {
    margin: 20px;
    flex-wrap: wrap;
  }
`


export default HikingView
