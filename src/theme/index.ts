import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    background: {
      default: '#E1DFCF',
    },
    primary: {
      main: '#404923',
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: 'olive',
        },
      },
    },
  },
})
