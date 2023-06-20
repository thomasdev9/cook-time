import './App.css';
import Router from './router/router';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    text: {
      primary: 'rgb(51, 51, 51)',
      secondary: 'rgb(155, 155, 155)',
    },
    primary: {
      main: '#23c686',
    },
    background: {
      default: 'rgb(247, 247, 247)',
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
