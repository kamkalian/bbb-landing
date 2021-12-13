import './App.css';
import './custom.css';
import * as React from 'react';
import Container from '@mui/material/Container';
import Overview from './comps/Overview';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';


function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Container className="container">
          <Overview />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
