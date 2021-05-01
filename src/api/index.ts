import axios from 'axios';

const baseURL = `http://jsonplaceholder.typicode.com/users`;

const makeRequest = axios.create({
  baseURL
});

export default makeRequest;
