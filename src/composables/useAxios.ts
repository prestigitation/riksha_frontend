import axios from "axios";

export function useInstance() {
  const axiosInstance = axios.create({
    baseURL: `http://localhost:3000/`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    },
  });

  return axiosInstance;
}