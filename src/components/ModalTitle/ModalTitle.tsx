import React from 'react'
import styled from 'styled-components'

interface ModalTitleProps {
  text?: string
}

const ModalTitle: React.FC<ModalTitleProps> = ({ text }) => (
  <StyledModalTitle>
    {text}
  </StyledModalTitle>
)

const StyledModalTitle = styled.div`
  font-family: Optima;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 32px;
  border-bottom: 4px solid rgb(0, 0, 0);
  width: 320px;
  padding-bottom: 20px;
  padding-top: 14px;
  text-align: left;
  @media (max-width: 767px) {
    width: 100%;
  }
`

export default ModalTitle