import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer'

const Page: React.FC = ({ children }) => (
  <StyledPage>
    <StyledMain>{children}</StyledMain>
    <Footer />
  </StyledPage>
)

const StyledPage = styled.div`
  margin-top: 27px;
  padding-bottom: 56px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 32px;
`

const StyledMain = styled.div`

  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - ${(props) => props.theme.topBarSize * 2}px);
  // @media (max-height: 900px) {
  //   min-height: calc(100vh - ${(props) => props.theme.topBarSize * 3}px);
  // }
  // @media screen and (min-width: 901px) and (max-width:1024px) {
  //   min-height: calc(100vh - ${(props) => props.theme.topBarSize * 6}px);
  // }
`
export default Page
