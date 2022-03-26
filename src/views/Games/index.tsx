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
  
  @media ${device.xs} {
    background-color: red;
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
  padding: 0 2rem;
  height: 200px;
  width: 1300px;
  
  @media ${device.xs} {
    width: auto;
    height:auto;
    margin-bottom: 50px;
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
