import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketseat-foodexplorer.onrender.com",
});
