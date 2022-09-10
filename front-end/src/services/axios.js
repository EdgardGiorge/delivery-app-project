import axios from 'axios';

const PORT = 3001;
const api = axios.create({
  baseURL: `http://${process.env.REACT_APP_HOSTNAME || 'localhost'}:${process.env.REACT_APP_BACKEND_PORT || PORT}`,
});

export default api;
