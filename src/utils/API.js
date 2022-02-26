import axios from 'axios';

const client = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    'Content-Type': 'application/json',
    Accept: '*/*'
  }
});

export const api = client;
