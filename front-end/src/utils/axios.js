import axios from 'axios';

export default axios.create({
  baseURL: `http://${process.env.REACT_APP_HOSTNAME}:${process.env.REACT_APP_BACKEND_PORT}`,
});
