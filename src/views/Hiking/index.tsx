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
            <TextBox>
          <Desc>
            Below are some hiking trails I've been on recently.
            I love to hike and enjoy the outdoors.
          </Desc>
        </TextBox>
            <Carousel />
          </>
        : 
        <>
          <Card  img={require('../../assets/canyon-me.png')} style={styles.cardLg}/>   
          <TextBox>
          <Desc>
            Below are some hiking trails I've been on recently.
            I love to hike and enjoy the outdoors.
          </Desc>
        </TextBox>
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
  min-height: 100vh;
  width: 100%;

  @media ${device.xs} {
    min-height: 140vh;
    width: 100%;
  }
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
const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  height: auto;
  width: 1300px;
  
  @media ${device.xs} {
    margin-top: 50px;
    width: auto;
    height:auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Desc = styled.p`
  
  font-size: ${(props) => props.theme.font.fontSize * 1.5}px;
  color: ${(props) => props.theme.colors.text};
  font-family: monospace; 
  font-weight: 700;
  @media ${device.xs} {
    font-size: ${(props) => props.theme.font.fontSize}px;
  }
`


export default HikingView
