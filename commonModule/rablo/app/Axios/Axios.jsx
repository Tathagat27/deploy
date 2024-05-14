import axios from 'axios';


const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL
const Axios = axios.create({
  baseURL:BACKEND_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    //'Authorization': `Bearer ${token}` // Corrected string interpolation
  },
});

export default Axios;