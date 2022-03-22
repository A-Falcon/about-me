import React, {useState} from 'react'
import styled from 'styled-components'
import {thriftData} from '../data/thriftData'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'

const ImgSlider: React.FC = () => {

  const [current, setCurrent] = useState(0)
  const length = thriftData.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <Wrapper> 
       <ChevLeft className='left-arrow' onPointerDown={nextSlide}/>
        {thriftData.map((elem, i) => (
          <Container className={i === current ? 'slide active' : 'slide'} key={i}>
            { i === current && 
              <>
                <Img src={elem.img} alt={elem.name} />
                <ElemName>{elem.name}</ElemName>
              </>
            }
            </Container>
        ))}
        <ChevRight className='right-arrow' onPointerDown={prevSlide}/>
    </Wrapper>
  )
}

const ChevLeft = styled(FiChevronLeft)`
  font-size: 60px;
  
`
const ChevRight = styled(FiChevronRight)`
font-size: 60px;

`

const Wrapper = styled.div`
  position: relative;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
flex-direction: column;
text-align: center;
`

const ElemName = styled.span`
padding: 20px;
font-size: 30px;
`
const ImgCont = styled.div`
/* background-color: pink; */

`

const Img = styled.img`
  
  width: 200px;
  border-radius: 10%;
  background-color: ${(props) => props.theme.colors.dark};
  box-shadow: 0 3px 20px rgb(0 0 0 / 0.5);

`
export default ImgSlider
