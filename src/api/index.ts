import axios from 'axios';

const baseURL = `http://jsonplaceholder.typicode.com`;

const makeRequest = axios.create({
  baseURL: baseURL
});

export default makeRequest;
