import axios from 'axios';
const apiRootUrl = process.env.API_BASE_URL || 'http://localhost:8000/';
const apiClient = axios.create({
    baseURL: apiRootUrl,
});
export default apiClient;
