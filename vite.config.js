import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";

export default defineConfig({
	plugins: [react()],
	base: "/",
	server: {
		host: "0.0.0.0", // Listen on all interfaces
		port: 5173, // Changed port to avoid conflict
		strictPort: true,
		cors: {
			origin: ["https://icgchemicals.com", "https://www.icgchemicals.com"],
			credentials: true,
		},
		https: {
			key: fs.readFileSync("/etc/nginx/keys/private.key"),
			cert: fs.readFileSync("/etc/nginx/keys/cert.pem"),
		},
		hmr: {
			host: "icgchemicals.com",
		},
	},
	preview: {
		host: "0.0.0.0",
		port: 5173,
	},
});
