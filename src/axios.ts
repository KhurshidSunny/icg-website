// create axios instance
import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "https://icgchemicals.com/api/external",
});
