import axios from "axios";


const axiosAPI = axios.create({
  baseURL: "http://api.mathjs.org/v4",
});

export default axiosAPI;