import React, { useContext } from 'react'
import styled from 'styled-components'
import Card from '../../components/Card'
import {device} from '../../data/device'
import Carousel from '../../components/Carousel'

import Heading from '../../components/Heading'
import { SizeContext } from '../../App'

const HikingView: React.FC = () => {
  const screenType = useContext(SizeContext)
  return (
    <Wrapper>
      <Heading id='hiking' label={'HIKING'} />
      <Content>
        { screenType === 'xs' 
        ? <>
            <Card img={require('../../assets/canyon-me.png')} style={styles.cardXs}/>
            <Carousel />
          </>
        : 
        <>
          <Card  img={require('../../assets/canyon-me.png')} style={styles.cardLg}/>   
          <Carousel />
        </>
}
    
      </Content>
      
    </Wrapper>
  )
}

const styles = {
  cardLg: {
    height: '1000px',
    width: '1250px'
  },
  cardXs: {
    display: 'flex',
    height: '16rem',
    width: '22rem'
  }
}

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.mid};
  min-height: 100%;
  width: 100%;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  

  @media ${device.xs} {
    flex-wrap: wrap;
  }
`


export default HikingView
