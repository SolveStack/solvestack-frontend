import { solvestackAPIClient } from 'api/clients';

const myHeaders = new Headers();
myHeaders.set('Cache-Control', 'no-store');
const urlParam = new URLSearchParams(window.location.search);
let tokens;
const domain = process.env.REACT_APP_COGNITO_DOMAIN;
const region = process.env.REACT_APP_COGNITO_REGION;
const appClientId = process.env.REACT_APP_COGNITO_APP_CLIENT_ID;
const userPoolId = process.env.REACT_APP_COGNITO_USER_POOL_ID;
const redirectURI = process.env.REACT_APP_COGNITO_REDIRECT_URI;

// Convert Payload from Base64-URL to JSON
const decodePayload = (payload) => {
    console.log(payload);
    const cleanedPayload = payload.replace(/-/g, '+').replace(/_/g, '/');
    const decodedPayload = atob(cleanedPayload);
    const uriEncodedPayload = Array.from(decodedPayload);

};
