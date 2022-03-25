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
  //########################################### By Buttons
  
  // const showFirstThreeImages = () => {
  //   return hikingData.slice(0, 3)
  // }

  // const [current, setCurrent] = useState(showFirstThreeImages())

  // const nextSlide = () =>{ 
  //   setCurrent(current.length === hikingData.length ? showFirstThreeImages() : current.concat(hikingData[current.length]))
  // }
  // const prevSlide= () =>{
  //   setCurrent(current.length === 3 ? hikingData.slice(hikingData.length - 3, hikingData.length) : current.slice(0, current.length - 1))
  // }

  //############################################ My Buttons
  

  const ting = hikingData.map((elem, i) => (
    
        <Item key={i}>
          {/* <Img src={elem.img} alt={elem.name} /> */}
          <Card  img={elem.img}  style={ screenType === 'xs' ? {width: '150px', height: 'auto'} : {height: 'auto', width: 'auto'}}/>
        </Item>
      ))



  return (
    <Wrapper> 
      <AliceCarousel  controlsStrategy="alternate"  mouseTracking items={ting} responsive={responsive} />
        {/* <ChevLeft className='left-arrow' onPointerDown={nextSlide}/>
        <ChevRight className='right-arrow' onPointerDown={prevSlide}/>  */}
    </Wrapper>
  )
}

const ChevLeft = styled(FiChevronLeft)`
  font-size: 60px;
  width: 10%;
`
const ChevRight = styled(FiChevronRight)`
  font-size: 60px;
  width: 10%;
`


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  height: 600px;
  


`
const Item = styled.div`
  
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
