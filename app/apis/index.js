import axios from "axios";
import { getFromStorage } from "../utils";

export const instance = axios.create({
    baseURL: "https://bds-backend-production.up.railway.app/api"|| "http://192.168.60.238:5000/api",
});

export const instance1 = axios.create({
    baseURL:"https://bds-ngo-backend-production.up.railway.app/api",
});
export default instance
