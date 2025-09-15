import axios from 'axios';
const baseURL=import.meta.env.VITE_API_URL

const api = axios.create({
  

  baseURL: `${baseURL}/api/v1`,

  headers: {
    'Content-Type': 'application/json',
  },
});
console.log('ertyu+' +api.defaults.baseURL)

// POST: contact form
// export const submitContactForm = (data) => api.post('/contact', data);


export default api;
