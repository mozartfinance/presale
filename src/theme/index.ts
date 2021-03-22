import { black, green, grey, red, white } from './colors'

export const lightTheme = {
  backgroundColor: "#ffffff;",
  linkcolor: 'rgb(141, 124, 130)',
  boxshadow: 'rgba(20, 1, 8, 0.15) -2px 2px 4px inset, rgb(255, 255, 255) 2px -2px 4px inset',
  linkactivecolor: 'rgb(236, 14, 92)',
  linkhovercolor: 'rgb(104, 85, 92)',
  borderRadius: 12,
  breakpoints: {
    mobile: 400,
  },
  color: {
    black,
    grey,
    primary: {
      light: red[200],
      main: red[500],
    },
    secondary: {
      main: green[500],
    },
    white,
    red
  },
  siteWidth: 1200,
  spacing: {
    1: 4,
    2: 8,
    3: 16,
    4: 24,
    5: 32,
    6: 48,
    7: 64,
  },
  topBarSize: 72
}
export const darkTheme = {
    backgroundColor: 'radial-gradient(circle at center top, #2D2024, #1F1418) 0% 0% / cover fixed',
    cardbackgroundColor: 'radial-gradient(circle at center top, #2D2024, #1F1418)',
    boxshadow: 'rgb(15, 10, 12) -2px 2px 4px inset, rgba(255, 255, 255, 0.075) 2px -2px 4px inset',
    bodycolor: 'rgb(255, 255, 255)',
    linkcolor: 'rgb(141, 124, 130)',
    linkactivecolor: 'rgb(236, 14, 92)',
    linkhovercolor: 'rgb(104, 85, 92)',
    borderRadius: 12,
    breakpoints: {
      mobile: 400,
    },
    color: {
      black,
      grey,
      primary: {
        light: red[200],
        main: red[500],
      },
      secondary: {
        main: green[500],
      },
      white,
      red
    },
    siteWidth: 1200,
    spacing: {
      1: 4,
      2: 8,
      3: 16,
      4: 24,
      5: 32,
      6: 48,
      7: 64,
    },
    topBarSize: 72
  }
