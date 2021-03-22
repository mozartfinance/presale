import React from 'react'
import styled from 'styled-components'

const CardContent: React.FC = ({ children }) => (
  <StyledCardContent>{children}</StyledCardContent>
)

const StyledCardContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  z-index: 2;
  position: relative;
  height: 30px;
  @media (max-width: 767px) {
    left: 0px;
    height: auto;
    padding: 5px;
  }
`

export default CardContent
