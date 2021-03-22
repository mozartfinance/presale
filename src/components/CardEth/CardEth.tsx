import React from 'react'
import styled from 'styled-components'

const CardEth: React.FC = ({ children }) => <StyledCardEth>{children}</StyledCardEth>

const StyledCardEth = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border: 0px;
  border-radius: 28px;
`

export default CardEth
