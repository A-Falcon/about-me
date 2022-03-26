import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import { device } from '../data/device';
import { plantData } from '../data/plantData';

const delay = 3000;

const Slideshow: React.FC = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef();

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
     setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === plantData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <SlideShow className="slideshow">
      <SlideShowSlider
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {plantData.map((elem, i) => (
            <Slide
              className="slide"
              key={i}
              src={elem.img}
            ></Slide>
        ))}
      </SlideShowSlider>

      <SlideShowDots className="slideshowDots">
        {plantData.map((_, idx) => (
          <Dot
            key={idx}
            style={index === idx ? {backgroundColor: '#fff'} : {backgroundColor: '#000'}}
            onClick={() => {
              setIndex(idx);
            }}
          ></Dot>
        ))}
      </SlideShowDots>
    </SlideShow>
  );
}

const SlideShow = styled.div`
  margin: 0 auto;
  overflow: hidden;
  max-width: 500px;
  margin-bottom: 500px;
  @media ${device.xs} {
    margin-bottom: 0px;
    width: 300px;
    height: 0px;
    padding-bottom: 400px;
  }
`

const SlideShowSlider = styled.div`
  white-space: nowrap;
  transition: ease 1000ms;
  @media ${device.xs} {
    max-width: auto;
    height: 300px;
    padding-bottom: 10px;
    
  }
`
// const ElemName = styled.div`

// margin-top: 50px;
// font-size: ${(props) => props.theme.font.fontSize * 2}px;
// font-family: ${(props) => props.theme.font.fontFam}
// `
 const Slide = styled.img`
  display: inline-block;
  height: 500px;
  
  width: 100%;
  border-radius: 40px;
  
  @media ${device.xs} {
    height: 300px;
    width: auto;
  }
`

/* Buttons */

const SlideShowDots = styled.div`
  text-align: center;
`

 const Dot =  styled.div` 
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;

  cursor: pointer;
  margin: 15px 7px 0px;

  background-color: #c4c4c4;
`

// .slideshowDot.active {
//   background-color: #6a0dad;
// }


export default Slideshow