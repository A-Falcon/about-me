import React, { useContext } from 'react'
import styled from 'styled-components'

import { SizeContext } from '../App'
import { device } from '../data/device'
import {hikingData} from '../data/hikingData' 

import Card from './Card'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"

const responsive = {
  0: { items: 2},
  600: { items: 3},
  1024: { items: 3},
};

const Carousel: React.FC = () => {
  const screenType = useContext(SizeContext)

  const ting = hikingData.map((elem, i) => (
        <Item key={i}>
          <Wrapper>
          <Card  img={elem.img}  style={ screenType === 'xs' ? styles.cardXs : styles.cardXLg}/>
          <Desc>{elem.name}</Desc>
          </Wrapper>
        </Item>
      ))

  return (
    <Wrapper> 
      <AliceCarousel
        infinite 
        disableButtonsControls
        disableDotsControls
        controlsStrategy="alternate"  
        mouseTracking items={ting} 
        responsive={responsive} 
        />
    </Wrapper>
  )
}
const styles = {
  cardXLg: {
    height: 'auto',
    width: '60%',
  },
  cardXs: {
    display: 'flex',
    height: 'auto',
    width: '100%'
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  
  @media ${device.xs} {
    height: auto;
  }
`
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 10px;
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.font.fontSize * 2}px;
  font-family: ${(props) => props.theme.font.fontFamBold};
  transition: 200ms;
  &:hover {
    color: ${(props) => props.theme.colors.light};
  }
`
const Desc = styled.p`
  line-height: 2;
  font-size: ${(props) => props.theme.font.fontSize}px;
  font-family: ${(props) => props.theme.font.fontFamBold}; 
  font-weight: ${(props) => props.theme.font.fontLabel};
  color: ${(props) => props.theme.colors.text};
  @media ${device.xs} {
    font-size: ${(props) => props.theme.font.fontLabel};
  }
`
export default Carousel
