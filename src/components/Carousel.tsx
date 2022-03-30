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
          <Card  img={elem.img}  style={ screenType === 'xs' ? styles.cardXs : styles.cardXLg}/>
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
  height: 600px;
  width: 100%;
  
  @media ${device.xs} {
    height: 400px;
  }
`
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  padding: 10px;
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.font.fontSize * 2}px;
  font-family: ${(props) => props.theme.font.fontFam};
  transition: 200ms;
  &:hover {
    color: ${(props) => props.theme.colors.light};
  }
`
export default Carousel
