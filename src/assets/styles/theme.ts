// client/src/theme.ts
import { createTheme } from '@mui/material/styles';
import { Colors } from './colors'; // Asegúrate de que la ruta sea correcta

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: Colors.PrimaryMain,
      light: Colors.PrimaryLight,
      dark: Colors.PrimaryDark,
    },
    secondary: {
      main: Colors.SecondaryMain,
      light: Colors.SecondaryLight,
      dark: Colors.SecondaryDark,
    },
    background: {
      default: Colors.BackgroundLight,
      paper: Colors.PaperLight,
    },
  }
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: Colors.PrimaryDark,
      light: Colors.PrimaryLight,
      dark: Colors.PrimaryDark,
    },
    secondary: {
      main: Colors.SecondaryDark,
      light: Colors.SecondaryLight,
      dark: Colors.SecondaryDark,
    },
    background: {
      default: Colors.BackgroundDark,
      paper: Colors.PaperDark,
    },
  }
});

export { lightTheme, darkTheme };