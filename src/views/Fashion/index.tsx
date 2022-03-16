import React from 'react'
import styled from 'styled-components'

interface FashionViewProps {

}

const FashionView: React.FC = () => {
  return (
    <Wrapper id='fashion'>

    </Wrapper>
  )
}


const Wrapper = styled.div`
  background-color: aquamarine;
  height: 100vh;
  width: 100%;
  margin-top: 100vh;
`

export default FashionView
