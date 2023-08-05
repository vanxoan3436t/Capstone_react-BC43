import { experimental_extendTheme as extendTheme } from '@mui/material/styles'


const theme = extendTheme({
  shopshoes: {},
  components: {
    MuiListItemText: {
      styleOverrides: {
        root: {
          '&.MuiListItemText-root': {
            paddingLeft: '0px'
          }
        }
      }
    },
    MuiButtonBase: {
      styleOverrides:{
        root:{
          '&.MuiButtonBase-root' : {
            marginRight:'10px',

          }
        }
      }
    },
  }
})

export default theme
