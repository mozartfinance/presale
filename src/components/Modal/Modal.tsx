import React from 'react'
import styled, { keyframes } from 'styled-components'

export interface ModalProps {
  onDismiss?: () => void
}

const Modal: React.FC = ({ children }) => {
  return (
    <StyledResponsiveWrapper>
      <StyledModal>{children}</StyledModal>
    </StyledResponsiveWrapper>
  )
}

const mobileKeyframes = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-100%);
  }
`

const StyledResponsiveWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  max-width: 512px;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    flex: 1;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    max-height: calc(100% - ${(props) => props.theme.spacing[4]}px);
    animation: ${mobileKeyframes} 0.3s forwards ease-out;
  }
  @media (max-width: 400px) {
  }
`

const StyledModal = styled.div`
margin: 0px 0px 2rem;
background-color: rgb(255, 255, 255);
box-shadow: rgb(47 128 237 / 5%) 0px 4px 8px 0px;
padding: 26px 0px 47px;
width: 50vw;
overflow: hidden;
max-width: 420px;
max-height: 90vh;
display: flex;
flex-direction: column;
text-align: center;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
  @media (max-width: 800px) {
  }
`

export default Modal
