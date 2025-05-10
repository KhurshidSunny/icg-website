import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://icgchemicals.com/api/", // Base URL for your API
	timeout: 10000, // Optional: Set a timeout for requests
	headers: {
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzNjNTE3OTM2Y2MxNDJiMjljMmYyZjUiLCJpYXQiOjE3MzQ4MDIzMTIsImV4cCI6MTczNDk3MjMxMn0.d08kssYYJ0brtyxZDFRh057fXTOulsIbgZsgTmPPcy0",
		"Content-Type": "application/json",
		Cookie: "Cookie_1=value",
	},
});

export default axiosInstance;
