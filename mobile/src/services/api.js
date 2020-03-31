import axios from 'axios';

const api = axios.create({
  baseURL: '<addYourOwnUrl>'
});

export default api;