import { createMuiTheme } from '@material-ui/core/styles';
import { dark } from '@material-ui/core/styles/createPalette';

const font = "'Jost', sans-serif";

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    secondary: {
      main: '#FF9F9F' 
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffffff'
    },
  },

  typography: {
    fontFamily: font,
    h6:{
      fontWeight: '500',
      fontSize: '18px'
    },
  }
});

export default theme; 