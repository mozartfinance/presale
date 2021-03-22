import React from 'react'
import styled from 'styled-components'

interface CardTitleProps {
  text?: string
}

const CardTitle: React.FC<CardTitleProps> = ({ text }) => (
  <StyledCardTitle>{text}</StyledCardTitle>
)

const StyledCardTitle = styled.div`
  font-family: Optima;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  padding: ${(props) => props.theme.spacing[3]}px;
  text-align: center;
  @media (max-width: 767px) {
    font-size: 12px;
    padding: 0;
  }
`

export default CardTitle
