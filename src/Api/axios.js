import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-d826b/us-central1/api",
  // baseURL:"http://localhost:1234"
  baseURL:"https://amazon-api-deploy-5yf9.onrender.com"
});

export {axiosInstance}


