import React, { useContext } from 'react'
import styled from 'styled-components'
import Card from '../../components/Card'

import { SizeContext } from '../../App'
import { device } from '../../data/device'
import { gameData } from '../../data/gameData'


import Heading from '../../components/Heading'


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
                However survival sandbox games are great for co-op or with a group of friends.
              </Desc>
              <Desc> 
                I would say I am a very obessive gamer in the sense that I will min-max anything I can in the game.
                However, as much as I love competitive games, I am not the best in that department.
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
  height: auto;
  background-color: ${(props) => props.theme.colors.mid};

  @media ${device.xs} {
    height: auto;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 50vh;
  height: auto;
  margin-top: -150px;

    @media ${device.sm} {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 100vh;
    height: auto;
    margin-top: 0px;
  }
`
const BoxOfCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height:auto;
  width: 100%;
  
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
  height: 200px;
  width: auto;
  padding-top: 0px;
  padding: 50px;

  @media ${device.xs} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:auto;
    width: auto;
    padding-top: 0px;
    padding: 20px;
  }
`

const Desc = styled.p`
  line-height: 2;
  font-size: ${(props) => props.theme.font.fontSize}px;
  font-family: ${(props) => props.theme.font.fontFam};
  font-weight: ${(props) => props.theme.font.fontWeight};
  color: ${(props) => props.theme.colors.text};
  padding-top: 0px;
  padding: 20px;
  
  @media ${device.xs} {
    font-size: ${(props) => props.theme.font.fontSize}px;
    padding:5px;
  }
`

export default Games
