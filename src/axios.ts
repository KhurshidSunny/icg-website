// create axios instance
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://208.109.240.175:3000/api/external",
});
