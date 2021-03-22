import React from 'react'
import styled from 'styled-components'

import Container from '../Container'

interface PageHeaderProps {
  icon: React.ReactNode
  maintitle?: string
  subtitle?: string
  title?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ icon, maintitle, subtitle, title }) => {
  return (
    <Container size="sm">
      <StyledPageHeader>
        <StyledIcon>{icon}</StyledIcon>
        <StyledMainTitle>{maintitle}</StyledMainTitle>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </StyledPageHeader>
    </Container>
  )
}

const StyledPageHeader = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-bottom: ${(props) => props.theme.spacing[4]}px;
  padding-top: ${(props) => props.theme.spacing[2]}px;
  margin: 0 auto;
  font-size: 27px;
  @media (max-width: 767px) {
    padding-top: ${(props) => props.theme.spacing[2]}px;
  }
`

const StyledMainTitle = styled.div`
  font-family: 'Poppins',sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  flex: 1 1 0%;
  line-height: 15px;
  text-align: center;
  color: rgba(117,17,19,1);
  @media (max-width: 767px) {
  }
`

const StyledTitle = styled.div`
  font-family: 'Poppins',sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  color: #a7a9ac;
  line-height: 44px;
  padding: 16px 0px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
   @media (max-width: 767px) {
  }
`

const StyledSubtitle = styled.div`
  font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: bold;
    width: fit-content;
    font-size: 15px;
    line-height: 18px;
    margin: auto;
    color: rgba(117, 17, 19, 1);
    text-align: center;
    cursor: pointer;
    overflow-wrap: anywhere;
  @media (max-width: 767px) {
  }
`

const StyledIcon = styled.div`
  text-align: center;
  position: relative;
  left: 19px;
  margin-top: 0px;
  @media (max-width: 767px) {
    left: 0px;
  }
`

export default PageHeader
