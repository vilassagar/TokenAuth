import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "https://localhost:7137/api/Login", //replace with your BaseURL
  method: "POST",
  headers: {
    "Content-Type": "application/json", // change according header type accordingly
  },
});

export default axiosConfig;
