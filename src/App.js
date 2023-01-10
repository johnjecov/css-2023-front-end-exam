import { ThemeProvider } from '@emotion/react';
import { Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import CustomButton from './components/CustomButton';
import './App.sass';

export const theme = createTheme({
  palette: {
    primary: {
      main: "#287FEB",
    },
    secondary: {
      main: "#DDEFFF",
    },
    neutrals: {
      black: "#1B1D1F",
      gray: "#72787F",
      lightgray: "#E8EBED",
      light: "#F7F8F9",
      white: "#FFFFFF",
    },
    accents: {
      green: "#40908C",
      purple: "#6973DB",
      orange: "#D25E00",
    },
  },
  typography: {
    fontFamily: [
      'Nunito'
    ],
    h1: {
      fontWeight: 800,
      fontSize: "80px",
      lineHeight: "150%",
    },
    h2: {
      fontWeight: 800,
      fontSize: "66px",
      lineHeight: "120%",
    },
    h3: {
      fontWeight: 800,
      fontSize: "52px",
      lineHeight: "150%",
    },
    h4: {
      fontWeight: 700,
      fontSize: "37px",
      lineHeight: "150%",
    },
    h5: {
      fontWeight: 700,
      fontSize: "26px",
      lineHeight: "150%",
    },
    h6: {
      fontWeight: 500,
      fontSize: "22px",
      lineHeight: "150%",
    },
    subtitle1: {
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: "150%",
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "150%",
    },
    body1: {
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "150%",
    },
    body2: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "150%",
    },
    navbar: {
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: "150%",
    },
    button: {
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "150%",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          gap: "10px",
          color: "#FFFFFF",
          background: "#6973DB",
          borderRadius: "10px",
          "&:hover": {
            boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.25)",
            background: "#6973DB",
          },
        },
      },
    },
  },
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CustomButton />
        <Typography variant="h1">H1</Typography>
        <Typography variant="h2">H2</Typography>
        <Typography variant="h3">H3</Typography>
        <Typography variant="h4">H4</Typography>
        <Typography variant="h5">H5</Typography>
        <Typography variant="h6">H6</Typography>
        <Typography variant="subtitle1">Subtitle 1</Typography>
        <Typography variant="subtitle2">Subtitle 2</Typography>
        <Typography variant="body1">Body 1</Typography>
        <Typography variant="body2">Body 2</Typography>
        <Typography variant="navbar">Navigation Bar</Typography>
        <Typography variant="button">BUTTON</Typography>
      </ThemeProvider>
    </div>
  );
}

export default App;
