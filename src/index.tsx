import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  palette: {
      primary: {
          main: '#0071c5'
      },
      secondary: {
          main: '#003c71'
      },
      info: {
        light: '#bcdafa',
        main: '#00aeef',
        dark: '#005a9d'
      },
      error: {
          light: '#fc4c02',
          main: '#ce0000',
          dark: '#ed1c24'
      },
      warning: {
          light: '#f3d54e',
          main: '#ffd100',
          dark: '#ffa300'
      },
      success: {
          light: '#c4d600',
          main: '#008a00'
      },
      grey: {
          100: '#f3f3f3',
          300: '#d7d7d7',
          400: '#bbbbbb',
          700: '#555555',
          900: '#252525'
      },
      background: {
          default: '#d7d7d7'
      }
  },
  typography: {
      fontFamily: 'Intel Clear',
      h1: {
          fontFamily: 'Intel Clear',
          fontWeight: 100,
          fontSize: '3rem',
          lineHeight: 1.5
      },
      h2: {
          fontFamily: 'Intel Clear',
          fontWeight: 400,
          fontSize: '2rem',
          lineHeight: 1.5
      },
      h3: {
          fontFamily: 'Intel Clear',
          fontWeight: 100,
          fontSize: '2rem',
          lineHeight: 1.5
      },
      h4: {
          fontFamily: 'Intel Clear',
          fontWeight: 700,
          fontSize: '1.5rem',
          lineHeight: 1.5
      },
      h5: {
          fontFamily: 'Intel Clear',
          fontWeight: 100,
          fontSize: '1.5rem',
          lineHeight: 1.5
      },
      h6: {
          fontFamily: 'Intel Clear',
          fontWeight: 700,
          fontSize: '1.25rem',
          lineHeight: 1.5
      },
      body1: {
          fontFamily: 'Intel Clear',
          fontWeight: 400,
          fontSize: '1rem',
          lineHeight: 1.5
      },
      body2: {
          fontFamily: 'Intel Clear',
          fontWeight: 300,
          fontSize: '1rem',
          lineHeight: 1.5
      },
      subtitle1: {
          fontFamily: 'Intel Clear',
          fontWeight: 400,
          fontSize: '0.9rem',
          lineHeight: 1.5
      },
      subtitle2: {
          fontFamily: 'Intel Clear',
          fontWeight: 300,
          fontSize: '0.9rem',
          lineHeight: 1.5
      },
      overline: {
          fontFamily: 'Intel Clear',
          fontWeight: 400, 
          fontSize: '0.8rem',
          lineHeight: 1.5,
          textTransform: 'none'
      },
      caption: {
          fontFamily: 'Intel Clear',
          fontWeight: 300,
          fontSize: '0.8rem',
          lineHeight: 1.5,
          textTransform: 'none'
      },
      button: {
          fontFamily: 'Intel Clear',
          fontWeight: 400, 
          fontSize: '0.7rem',
          lineHeight: 1.5,
          textTransform: 'none'
      },
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
      <App />
  </MuiThemeProvider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
