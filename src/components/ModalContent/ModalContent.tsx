import React from 'react'
import styled from 'styled-components'

const ModalContent: React.FC = ({ children }) => {
  return <StyledModalContent>{children}</StyledModalContent>
}

const StyledModalContent = styled.div`
  padding: ${(props) => props.theme.spacing[4]}px;
  @media (max-width: 767px) {
    width: 100%;
    padding: ${(props) => props.theme.spacing[4]}px 12px;
  }
`

export default ModalContent
