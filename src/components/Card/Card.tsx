import React from 'react'
import styled from 'styled-components'

const Card: React.FC = ({ children }) => <StyledCard>{children}</StyledCard>

const StyledCard = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background:  ${(props) => props.theme.cardbackgroundColor};
  border: 0px;
  border-radius: 28px;
  box-shadow: ${(props) => props.theme.boxshadow};
  width: 320px;
  @media (max-width: 767px) {
    width: 100%;
  }
`

export default Card
