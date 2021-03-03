import axios from 'axios';

const api = axios.create({
//   baseURL: 'http://localhost:3333',
  baseURL: 'https://betheheroapi4.herokuapp.com/',
})

export default api;
