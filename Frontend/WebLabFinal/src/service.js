import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const fetchAttractions = () => API.get("/attractions");
export const addAttraction = (data) => API.post("/attractions/add", data);
export const fetchVisitors = () => API.get("/visitors");
