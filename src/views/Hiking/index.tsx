import React, { useContext } from 'react'
import styled from 'styled-components'

import { SizeContext } from '../../App'
import {device} from '../../data/device'

import Heading from '../../components/Heading'
import Card from '../../components/Card'
import Carousel from '../../components/Carousel'




const HikingView: React.FC = () => {
  const screenType = useContext(SizeContext)
  return (
    <Wrapper>
      <Heading id='hiking' label={'HIKING'} />
      <Content>
        { screenType === 'xs' 
        ? <>
            <Card img={require('../../assets/Hiking/mask.png')} style={styles.cardXs}/>
            <TextBox>
          <Desc>
            Below are some hiking trails I've been on recently.
            Every now and then I love to get away from the city and appreciate nature.
            Although I haven't been on many trails or national parks, I look forwawrd to traveling to new places.
          </Desc>
        </TextBox>
            <Carousel />
          </>
        : 
        <>
          <Card  img={require('../../assets/Hiking/mask.png')} style={styles.cardXLg}/>   
          <TextBox>
            <Desc>
            Below are some hiking trails I've been on recently.
            Every now and then I love to get away from the city and appreciate nature.
            Although I haven't been on many trails or national parks, I look forwawrd to traveling to new places.
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
  cardXLg: {
    height: 'auto',
    width: '50%',
  },
  cardXs: {
    display: 'flex',
    height: '16rem',
    width: '22rem'
  }
}

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  min-height: 100vh;
  width: 100%;

  @media ${device.xs} {
    min-height: 140vh;
    width: 100%;
    height: auto;
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
    min-height: 100vh
  }
`
const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: auto;
  padding: 0 12rem;
  
  @media ${device.xs} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:auto;
    width: auto;
    margin-top: 5vh;
    padding: 0 2rem;
  }
`
const Desc = styled.p`
  line-height: 2;
  font-size: ${(props) => props.theme.font.fontSize}px;
  font-family: ${(props) => props.theme.font.fontFamBold}; 
  font-weight: ${(props) => props.theme.font.fontWeight};
  color: ${(props) => props.theme.colors.text};
  @media ${device.xs} {
    font-size: ${(props) => props.theme.font.fontSize}px;
  }
`


export default HikingView
