import axios from 'axios';

const PORT = 3001;
const api = axios.create({
  baseURL: `http://${process.env.REACT_APP_HOSTNAME || 'localhost'}:${process.env.REACT_APP_BACKEND_PORT || PORT}`,
});

export default api;

/* Projeto em grupo: Quando o grupo definiu que eu não participaria mais, comecei a adiantar as telas na nova branch do PR individual, agora repassando para a branch oficial "18"  */
