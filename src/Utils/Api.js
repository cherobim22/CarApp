import axios from "axios";

const api = axios.create({
    baseURL: 'http://ec2-3-19-206-15.us-east-2.compute.amazonaws.com',
    timeout: 5000
})

export default api;