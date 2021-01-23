import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Amplify, { Auth } from 'aws-amplify';
//import awsExports from 'aws-exports';

const currentConfig = Amplify.configure({
    Auth: {
        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: 'us-west-2:218391ad-539b-4ddc-ae4e-066c180d0adc',

        // REQUIRED - Amazon Cognito Region
        region: 'us-west-2',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'us-west-2_guHGOpG1U',

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '2ve3af817uue2fksma24cha3pk',

        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: false,

        // // OPTIONAL - Configuration for cookie storage
        // // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
        // cookieStorage: {
        //     // REQUIRED - Cookie domain (only required if cookieStorage is provided)
        //     domain: '.yourdomain.com',
        //     // OPTIONAL - Cookie path
        //     path: '/',
        //     // OPTIONAL - Cookie expiration in days
        //     expires: 365,
        //     // OPTIONAL - Cookie secure flag
        //     // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
        //     secure: true,
        // },

        // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
        authenticationFlowType: 'USER_PASSWORD_AUTH',

        // OPTIONAL - Manually set key value pairs that can be passed to Cognito Lambda Triggers
        clientMetadata: { myCustomKey: 'myCustomValue' },

        // // OPTIONAL - Hosted UI configuration
        // oauth: {
        //     domain: 'your_cognito_domain',
        //     scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
        //     redirectSignIn: 'http://localhost:3000/',
        //     redirectSignOut: 'http://localhost:3000/',
        //     responseType: 'code', // or 'token', note that REFRESH token will only be generated when the responseType is code
        // },
    },
});

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#008080',
            dark: '#062d2d',
            light: '#02bfbf',
        },
        secondary: {
            // light: 'pink',
            main: '#ff73a1',
        },
        info: {
            light: '#bcdafa',
            main: '#00aeef',
            dark: '#005a9d',
        },
        error: {
            light: '#fc4c02',
            main: '#ce0000',
            dark: '#ed1c24',
        },
        warning: {
            light: '#f3d54e',
            main: '#ffd100',
            dark: '#ffa300',
        },
        success: {
            light: '#c4d600',
            main: '#008a00',
        },
        grey: {
            100: '#f3f3f3',
            300: '#d7d7d7',
            400: '#bbbbbb',
            700: '#555555',
            900: '#252525',
        },
        background: {
            default: '#d7d7d7',
        },
    },
    typography: {
        fontFamily: 'Arial',
        h1: {
            fontFamily: 'Arial',
            fontWeight: 100,
            fontSize: '3rem',
            lineHeight: 1.5,
        },
        h2: {
            fontFamily: 'Arial',
            fontWeight: 400,
            fontSize: '2rem',
            lineHeight: 1.5,
        },
        h3: {
            fontFamily: 'Arial',
            fontWeight: 100,
            fontSize: '2rem',
            lineHeight: 1.5,
        },
        h4: {
            fontFamily: 'Arial',
            fontWeight: 700,
            fontSize: '1.5rem',
            lineHeight: 1.5,
        },
        h5: {
            fontFamily: 'Arial',
            fontWeight: 100,
            fontSize: '1.5rem',
            lineHeight: 1.5,
        },
        h6: {
            fontFamily: 'Arial',
            fontWeight: 700,
            fontSize: '1.25rem',
            lineHeight: 1.5,
        },
        body1: {
            fontFamily: 'Arial',
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: 1.5,
        },
        body2: {
            fontFamily: 'Arial',
            fontWeight: 300,
            fontSize: '1rem',
            lineHeight: 1.5,
        },
        subtitle1: {
            fontFamily: 'Arial',
            fontWeight: 400,
            fontSize: '0.9rem',
            lineHeight: 1.5,
        },
        subtitle2: {
            fontFamily: 'Arial',
            fontWeight: 300,
            fontSize: '0.9rem',
            lineHeight: 1.5,
        },
        overline: {
            fontFamily: 'Arial',
            fontWeight: 400,
            fontSize: '0.8rem',
            lineHeight: 1.5,
            textTransform: 'none',
        },
        caption: {
            fontFamily: 'Arial',
            fontWeight: 300,
            fontSize: '0.8rem',
            lineHeight: 1.5,
            textTransform: 'none',
        },
        button: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 500,
            fontSize: '0.875rem',
            lineHeight: 1.75,
            letterSpacing: '0.02857em',
            textTransform: 'uppercase',
        },
    },
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
