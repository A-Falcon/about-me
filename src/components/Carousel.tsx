import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import {hikingData, HikingData} from '../data/hikingData' 
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import { device } from '../data/device'
import Card from './Card'
import { SizeContext } from '../App'


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
        controlsStrategy="alternate"  
        mouseTracking items={ting} 
        responsive={responsive} 
        />
        {/* <ButtonWrap>
          <ChevLeft className='left-arrow' onPointerDown={nextSlide}/>
          <ChevRight className='right-arrow' onPointerDown={prevSlide}/> 
        </ButtonWrap> */}

        
    </Wrapper>
  )
}

// const ChevLeft = styled(FiChevronLeft)`
//   font-size: ${(props) => props.theme.font.fontSize * 3}px;
//   height: 150px;
//   width: 10%;
// `
// const ChevRight = styled(FiChevronRight)`
//   font-size: ${(props) => props.theme.font.fontSize * 3}px;
//   height: 150px;
//   width: 10%;
// `
// const ButtonWrap = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   height:100px;
//   background-color: red;
// `

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
  width: 100%;
  
  height: 600px;
  
  @media ${device.xs} {
    height: 400px;
    
  }

`
const Item = styled.div`
  
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  height: 400px;
  font-size: ${(props) => props.theme.font.fontSize * 2}px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.font.fontFam};
  transition: 200ms;
  &:hover {
    color: ${(props) => props.theme.colors.light};
  }
`

const ImgCont = styled.div`

`

const Img = styled.img`
  
  width: 300px;
  border-radius: 10%;
  background-color: ${(props) => props.theme.colors.dark};
  box-shadow: 0 3px 20px rgb(0 0 0 / 0.3);

  @media ${device.xs} {
    width: 150px;
  }
`
export default Carousel
