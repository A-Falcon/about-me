import React from 'react'
import styled from 'styled-components'
import Card from '../../components/Card'

import Heading from '../../components/Heading'
import { device } from '../../data/device'
import { gameData } from '../../data/gameData'

const Games: React.FC = () => {
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
          </TextBox>
          <BoxOfCards>
            {gameData.map((elem, i) =>(
              <Card  key={i} img={elem.img} style={styles.cardXs}/>
            ))}
          </BoxOfCards>
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
    height: '200px',
    width: '200px',
    margin: '10px'
  }
}
const Wrapper = styled.div`

  background-color: ${(props) => props.theme.colors.mid};
  height: 150vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  width: 100%;


  @media ${device.xs} {
    flex-wrap: wrap;
  }
`
const BoxOfCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height:100%;
  
  `

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  height: 200px;
  width: 1300px;
  
  @media ${device.xs} {
    width: 100%;
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

export default Games
