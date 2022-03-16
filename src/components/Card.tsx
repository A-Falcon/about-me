import React from 'react'
import styled from 'styled-components'

// interface CardProps {
//   img: any
// }
const Card: React.FC = () => {
  return (
    <Wrapper>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  height:780px;
  width: 680px;
  border-radius: 10%;
  background-color: ${(props) => props.theme.colors.dark};
  box-shadow: 0 3px 20px rgb(0 0 0 / 0.5);
`

export default Card
