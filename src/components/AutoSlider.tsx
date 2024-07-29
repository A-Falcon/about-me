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
        {plantData.map((_, id) => (
          <Dot
            key={id}
            style={index === id ? {backgroundColor: '#f5ebe0'} : {backgroundColor: '#242424'}}
            onClick={() => {
              setIndex(id);
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
  max-width: 25vw;
  
  
  @media ${device.xs} {
    margin-top: 0vh;
    max-width: 15.5vw;
    height: 0vh;
    padding-bottom: 40vh;
  }
  @media ${device.sm} { 
    margin-top: 0vh;
    max-width:25vw;
    
  }

`

const SlideShowSlider = styled.div`
  white-space: nowrap;
  transition: ease 1000ms;
  @media ${device.xs} {
    max-width: 15.5vw;
    height: auto;
    padding-bottom: 10vh;
  }
  @media ${device.sm} {
    max-width: auto;
    height: 50vh;
  }
`
// const ElemName = styled.div`

// margin-top: 50px;
// font-size: ${(props) => props.theme.font.fontSize * 2}px;
// font-family: ${(props) => props.theme.font.fontFam}
// `
 const Slide = styled.img`
  display: inline-block;
  height: 50vh;
  
  width: 100%;
  border-radius: 40px;
  
  @media ${device.xs} {
    max-height: 30vh;
    width: auto;
  }
  @media ${device.sm} {
    height: 50vh;
    width: auto;
  }


`

/* Buttons */

const SlideShowDots = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.text};
`

 const Dot =  styled.div` 
  display: inline-block;
  height: 2vh;
  width: 1.05vw;
  border-radius: 50%;
  cursor: pointer;
  margin: 1.5vh .7vh 0vh;

  background-color: #c4c4c4;
`

// .slideshowDot.active {
//   background-color: #6a0dad;
// }


export default Slideshow