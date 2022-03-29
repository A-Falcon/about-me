import React, { useContext } from 'react'
import styled from 'styled-components'
import Card from '../../components/Card'

import Heading from '../../components/Heading'
import { device } from '../../data/device'
import { gameData } from '../../data/gameData'
import { SizeContext } from '../../App'

const Games: React.FC = () => {
  const screenType = useContext(SizeContext)
  return (
      <Wrapper>
         <Heading id='games' label={'GAMES'}/>
         <Content>
          <TextBox>
              <Desc> 
                Below are some games I've been playing recenlty. 
                You can usually find me playing lore driven games vs competeive games.
                However survival sandbox games are great co-op or with a group of friends.
              </Desc>
              <Desc> 
                Below are some games I've been playing recenlty. 
                You can usually find me playing lore driven games vs competeive games.
                However survival sandbox games are great co-op or with a group of friends.
              </Desc>
          </TextBox>
          <BoxOfCards>
            {gameData.map((elem, i) =>(
              <Card  key={i} img={elem.img} style={ screenType === 'xs' ? {height: '100px', width: 'auto', margin: '5px'} : {height: '200px', width: 'auto', margin: '10px'}}/>
            ))}
          </BoxOfCards>
         </Content>
      </Wrapper>
  )
}

const styles = {
  cardLg: {
    display: 'flex',
    height: '200px',
    width: '200px',
    margin: '10px'
  },
  cardXs: {
    display: 'flex',
    height: '100px',
    width: '100px',
    margin: '5px'
  }
}
const Wrapper = styled.div`
  
  background-color: ${(props) => props.theme.colors.mid};
  height: auto;

  @media ${device.xs} {
    height: auto;
  }
    @media ${device.sm} {
      
    }
`
const Content = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40vh;
  
  @media ${device.xs} {
    
    
  }

    @media ${device.sm} {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 80vh
  }
`
const BoxOfCards = styled.div`

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height:auto;
  
  @media ${device.xs} {
    
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  `

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 50px;
  padding-top: 0px;
  height: 200px;
  width: auto;
  
  @media ${device.xs} {
    width: auto;
    height:auto;
    padding: 20px;
    padding-top: 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

`

const Desc = styled.p`
  padding: 20px;
  padding-top: 0px;
  font-size: ${(props) => props.theme.font.fontSize}px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.font.fontFam};
  font-weight: ${(props) => props.theme.font.fontWeight};
  @media ${device.xs} {
    font-size: ${(props) => props.theme.font.fontSize}px;
    padding:5px;
  }
`

export default Games
