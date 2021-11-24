import axios from "axios";

const api = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/videos",
});

export default api;
