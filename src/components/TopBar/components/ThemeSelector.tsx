import React, { useCallback } from 'react'
import styled from 'styled-components'
import { darkTheme, lightTheme } from '../../../theme';
import { useDispatch } from 'react-redux';
import {applyTheme} from '../../../redux/themeActions'

const ThemeSelector = () => {
  const dispatch = useDispatch();
  const changeTheme = (theme: any) => {
    console.log(theme)
    dispatch(applyTheme(theme));
  }

  return (
    <StyledSwitchButton>
        <StyledButton onClick={() => changeTheme(lightTheme)}>
          <StyledIcon>🌞</StyledIcon>
        </StyledButton>
        <StyledButton onClick={() => changeTheme(darkTheme)}>
          <StyledIcon>🌚</StyledIcon>
        </StyledButton>
    </StyledSwitchButton>
  )
}

const StyledSwitchButton = styled.div`
display: flex;
padding: 8px;
`
const StyledIcon = styled.div`
font-size: 24px;
`
const StyledButton = styled.div`
  -webkit-box-align: center;
  align-items: center;
  background: radial-gradient(circle at center top, rgb(247, 243, 244), rgb(243, 237, 239));
  border: 0px;
  border-radius: 28px;
  box-shadow: rgba(20, 1, 8, 0.15) -4px 4px 8px 0px;
  box-sizing: border-box;
  color: rgb(209, 0, 77);
  cursor: pointer;
  display: flex;
  flex: 1 1 0%;
  font-size: 16px;
  font-weight: 700;
  height: 36px;
  -webkit-box-pack: center;
  justify-content: center;
  margin: -2px 0px 0px;
  min-width: 36px;
  outline: none;
  padding: 0px;
  width: 100%;
`

export default ThemeSelector
