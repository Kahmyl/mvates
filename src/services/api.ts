import axios from "axios"

const BASE_URL = 'http://localhost:4500/api'

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });


export { api }
